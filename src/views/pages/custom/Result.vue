<template>
    <div ref="page" id="page">
        <div ref="print"  class="flex justify-end">
            <vs-button size="small" to="" @click="generatePrint">Print</vs-button>
        </div>

        <!-- <div class="vld-parent">
            <Loader 
            :active.sync="loading" 
            :color="color"
            :is-full-page="true"></Loader>
        </div> -->

        <div v-if="Array.isArray(results)" class="page_load">
            <Grid :outputArray="results" 
            :scale="1"
            :scaleFactor="10"></Grid>
        </div>

        <h4 v-if="loading" class="sm:mx-0 mx-4 my-6 text-center">{{loadingLabel}}</h4>
        
        <h5 v-if="Array.isArray(results) && results.length==0" class="sm:mx-0 mx-4 my-6 text-center">Results cannot be generated of specified requirements</h5>

        
        <div class="flex justify-around text-center mt-5">
            <vs-button size="large" to="/requirement">Back</vs-button>
        </div>


    </div>
</template>

<script>
import Grid from '../../components/canvas'
import Loader from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import getResults from './getResults'

export default{
    data(){
        return{
            results:'',
            height:800,
            width:1200,
            color:'#EA5455',
            loading:false,
            loadingLabel:'Loading',
            loadDots:0
        }
    },
    components:{
        Grid,
        Loader
    },
    watch:{
        height(){
        this.height= this.$refs.page.offsetHeight
        },
        width(){
        this.width= this.$refs.page.offsetWidth
        }
    },
    methods:{
        generatePrint(){
        // this.$htmlToPaper('result')
            window.print()
        }
    },
    mounted() {
        this.$vs.loading({
            type:'material'
        })

        console.log(this.$refs.print)
        this.loading= true
        
        console.log('getResults')
        setTimeout(()=>{
            getResults().then(result => {
                this.results = result
                console.log('Results')
                console.log(this.results)

                this.$vs.loading.close()
                })
        },1000)

        console.log('About to loader closed')

        let loadInterval = setInterval(()=>{
            
            this.loadingLabel= new StringBuilder('Loading')
            for(let i=0; i<=this.loadDots; ++i){
                this.loadingLabel.append(' .')
            }
            if(this.loadDots>=4) this.loadDots=0
            this.loadDots+=1

            if(Array.isArray(this.results)){
            this.loading= false
            //  this.$vs.loading.close('#page')
            }   
        },500)

        // if(Array.isArray(this.results)) clearInterval(loadInterval)

        console.log('loader closed')
    }
}

function StringBuilder(value) {
    this.strings = new Array();
    this.append(value);
}

StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
}

StringBuilder.prototype.clear = function () {
    this.strings.length = 0;
}

StringBuilder.prototype.toString = function () {
    return this.strings.join("");
}

</script>

<style >
</style>