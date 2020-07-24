import MaterialStore from '../../../store/data-list/moduleDataList.js'
import RequirementStore from '../../../store/data-list-req/moduleDataList.js'
import { howToCutBoards1D } from 'stock-cutting'

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
    
    let bladeSize = 0.125;
    
    let stockSizes = []
    for(let material of materials){
        let size=material.length * material.pieces
        stockSizes.push({size,cost:1})
    }
    
    let input = []
    for(let cuts of requirements)
        input.push({size:cuts.length,count:cuts.pieces})

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
let output = howToCutBoards1D(setInputs())

console.log(output);
return output
}
// print({ stockSizes, input, output })



