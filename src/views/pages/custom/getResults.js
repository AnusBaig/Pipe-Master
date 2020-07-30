import MaterialStore from '../../../store/data-list/moduleDataList.js'
import RequirementStore from '../../../store/data-list-req/moduleDataList.js'
import { howToCutBoards1D } from 'stock-cutting'
import { _ } from 'core-js'

// function print(obj) {
//     // console.log(inspect(obj, false, null, true))
// }

// var stockSizes = [{ size: 9 * 7, cost: 1 }];
// var input1 = [
    //     { size: 7, count: 1 },
    //     { size: 3, count: 1 },
    // ];
    
function setInputs(){
    const materials = MaterialStore.state.products
    const requirements = RequirementStore.state.products
    
    let bladeSize = 0;
    
    let stockSizes = []
    for(let material of materials){
        let size= (material.length * material.pieces)
        stockSizes.push({size,cost:1})
    }
    
    let input = []
    for(let cuts of requirements){
        let size=cuts.length
        input.push({size,count:cuts.pieces})
    }

//         console.log(materials)
// console.log(requirements)

// console.log(stockSizes)
// console.log(input)

    let query={
        stockSizes,
        bladeSize,
        requiredCuts:input
    }
    console.log(query)
    return query 
}

export default function getCuts(){
    try{    
        let output = howToCutBoards1D(setInputs())
        console.log('output')        
        console.log(output)

        let result=[]
        for(let pipe of output){
            let factor=1

            if(pipe.stock.size<=500 && pipe.stock.size>=200) factor=2
            else if(pipe.stock.size<=1000 && pipe.stock.size>=500) factor=10
            else if(pipe.stock.size<=10000 && pipe.stock.size>=1000) factor=60
            else if(pipe.stock.size<=100000 && pipe.stock.size>=10000) factor=500
            else if(pipe.stock.size<=200000 && pipe.stock.size>=100000) factor=1000
            else if(pipe.stock.size<=300000 && pipe.stock.size>=300000) factor=3000
            else if(pipe.stock.size<=400000 && pipe.stock.size>=400000) factor=4000
            else if(pipe.stock.size<=500000 && pipe.stock.size>=500000) factor=5000
            else if(pipe.stock.size>=500000) factor=6000

            let filteredPipe={
                count:pipe.count,
                stock:{
                    size:pipe.stock.size
                },
                factor,
                cuts:[]
            }
            let divions=[]
            for(let cut of pipe.cuts){
                cut/= factor
                
                divions.push(Math.trunc(cut))
            }
            // if(divions.reduce((a, b)=>a + b)>140){
            //     divions=[]

            //     for(let cut of pipe.cuts){
            //         cut/= factor*(pipe.cuts.length-1)
            //         divions.push(Math.trunc(cut))
            //         }
            // }
            filteredPipe.cuts=divions
            result.push(filteredPipe)
        }
        return new Promise((res, rej)=> res(result))
    }
    catch(e){
        console.log(e)
        return ''
    }
}
// print({ stockSizes, input, output })



