<template>
<div id="holder" style="position:relative;margin:0 auto;">
  <canvas ref="canvas" style="position:absolute;top:0;left:0"></canvas>
  <canvas ref="textCanvas" style="position:absolute;top:0;left:0"></canvas>
</div>
</template>
<script>
export default {
  data(){
    return{
      startingPoint:{x:0,y:0},
      linesArray:[],
      marginBetweenLines:40,
      scaleFactor:20,
      textCanvas:"",
      textCanvasContext:"",
      lineWidth:30,
      
    }
  },
  props:{
    scale:{
      type:Number,
      default:1
    },
    outputArray:{
      type:Array,
      required:true
    },
    width:{
      type:Number,
      required:true
    },
    height:{
      type:Number,
      required:true
    }
  },
  computed:{
    outputArr(){
      return this.outputArray;
    }
  },
  watch:{
    width:function(val){
      this.$forceUpdate();
    },
    height:function(val){
      this.$forceUpdate();
    },
    scale:function(val){
      this.$forceUpdate();
    }
  },
  methods:{
    initData(){
      
     var holder=document.documentElement.style;
     holder.setProperty('--canvasWidth',this.width + "px");
     holder.setProperty('--canvasHeight',this.height + "px");
      

      this.textCanvas=this.$refs.textCanvas;
      this.textCanvas.style.width ='100%';
      this.textCanvas.style.height='100%';
      // this.textCanvas.width=this.textCanvas.offsetWidth;
      // this.textCanvas.height=this.textCanvas.offsetHeight;
      this.textCanvas.width=window.innerWidth;
      this.textCanvas.height=window.innerHeight;
      this.textCanvasContext=this.textCanvas.getContext('2d');
      this.textCanvasContext.scale(this.scale,this.scale);
      

      this.startingPoint.x=0;
      this.startingPoint.y=window.innerHeight/2-this.lineWidth*this.outputArr.length;
    },
    findPieces(){
      var that=this;
      for (let i = 0; i < this.outputArr.length; i++) {
        for (let j = 0; j < this.outputArr[i].count; j++) {
          
          this.linesArray.push({
            stock:that.outputArr[i].stock.size,
            cuts:that.outputArr[i].cuts
            });

        }
      }
    },
    mapToPoints(){
     var marginBetweenIndex=0;

     var maxSum=this.linesArray[0].cuts.reduce((prev,next)=>prev+next);
     var largest=this.linesArray[0];
     this.linesArray.forEach((val,i)=>{
        var sum=val.cuts.reduce((prev,next)=>prev+next);
        if(sum>maxSum)
          {
            maxSum=sum;
            largest=this.linesArray[i];
          }
     });


     for (const key in this.linesArray) {
    
       var distanceTravelled=this.startingPoint.x;
       var result=this.linesArray[key].cuts.map((val,i)=>{
       if(distanceTravelled==this.startingPoint.x);
       distanceTravelled+=val;
       return {
         x:(distanceTravelled*this.scaleFactor),
         y:this.startingPoint.y+this.marginBetweenLines*marginBetweenIndex
       }
      });
      result.unshift({x:(this.startingPoint.x),y:result[0].y});
      this.linesArray[key].points=result;
      marginBetweenIndex++;
      
     }

     var margin=(this.textCanvas.width-(largest.points[largest.points.length-1].x-largest.points[0].x))/2;
     this.linesArray.forEach((val,i)=>{
       val.points.forEach((point,j)=>{
         point.x+=margin;
       });
     });
     
    },
    renderLines(){

      var colors=["#1976d2","#EA5455","#7367F0","#0097a7","#e91e63","#FF9F43","#1E1E1E","#28C76F"];
      var colorAssignments={'9':'#7367F0','7':'#0097a7','8':'#FF9F43','10':'#28C76F','4':'#EA5455','2':'#607d8b'};
      
      // console.log(this.linesArray);
      
      var canvas=this.$refs.canvas;
      canvas.style.width ='100%';
      canvas.style.height='100%';
      // canvas.width=canvas.offsetWidth;
      // canvas.height=canvas.offsetHeight;
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
      var context=canvas.getContext('2d');
      context.scale(this.scale,this.scale);
      
      
      context.lineWidth=this.lineWidth; 
    
     
      // context.lineCap='round';
      // context.lineJoin="round";
      
      this.linesArray.forEach((val,i)=>{
          var currentCut=val.cuts[0];
          
          var prev={x:val.points[0].x,y:val.points[0].y};
          val.points.forEach((point,j)=>{
              context.strokeStyle="black";
              context.beginPath();
              context.moveTo(prev.x,prev.y);
        
              if(currentCut in colorAssignments)
              {
                 context.strokeStyle=colorAssignments[currentCut];    
              }
              else{
                var random=this.getRandomColor();
                colorAssignments[currentCut]=random;
                context.strokeStyle=random;
              }
              context.lineTo(point.x,point.y);
              context.stroke();
              context.closePath();
              currentCut=val.cuts[j];
              prev=point;
          });
          
      });
      
      
    },
    renderTextPoints()
    {
        this.linesArray.forEach((val,i)=>{
          val.cuts.forEach((cut,j)=>{
          this.textCanvasContext.beginPath();
          this.textCanvasContext.font = '18px Roboto ';
          this.textCanvasContext.textAlign = "center";
          this.textCanvasContext.textBaseline = "center";
          this.textCanvasContext.fillStyle = "white";
          if(cut==1)
          this.textCanvasContext.fillText(cut,val.points[j].x+10,val.points[j].y+5);
          else
          this.textCanvasContext.fillText(cut,val.points[j].x+20,val.points[j].y+5);
          this.textCanvasContext.closePath();
          });
        });

        // this.linesArray.forEach((val,i) => {
        //   var initialPosX=(this.linesArray[i].points[1].x-this.linesArray[i].points[0].x)/2;
        //   var initialPosY=this.linesArray[i].points[0].y;
        //   this.linesArray[i].cuts.forEach((cut,j)=>{
        //   this.textCanvasContext.beginPath();
        //   this.textCanvasContext.font = '18px Segoe UI ';
        //   this.textCanvasContext.textAlign = "center";
        //   this.textCanvasContext.textBaseline = "center";
        //   this.textCanvasContext.fillStyle = "white";
        //   this.textCanvasContext.fillText(cut,initialPosX,initialPosY+5);
          
        //   this.textCanvasContext.closePath();
        //   initialPosX+=(cut*this.scaleFactor);

        //   });
        // });
    
    },
    renderSplitters(){
        this.linesArray.forEach((val,i)=>{
          val.points.forEach((point,j)=>{
            this.textCanvasContext.beginPath();
            this.textCanvasContext.textBaseline = "middle";
            this.textCanvasContext.fillStyle = "black";
            this.textCanvasContext.font = `${this.lineWidth}px Segoe UI `;
            this.textCanvasContext.fillText('|',point.x,point.y);
            this.textCanvasContext.closePath();
          });
        });
    },
    renderNumbers(){

    },
    getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  },
  mounted(){
    this.initData();
    this.findPieces();
    this.mapToPoints();
    this.renderLines();
    this.renderTextPoints();
    this.renderSplitters();
    this.renderNumbers();
  }

}
</script>
<style >
:root{
  --canvasWidth:1100;
  --canvasHeight:500;
}
#holder{
  width: var(--canvasWidth);
  height: var(--canvasHeight);
}
</style>