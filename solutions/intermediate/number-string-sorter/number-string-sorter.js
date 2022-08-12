// function sorterString (arr) {
//     let strings = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] ==='string') {
//             strings.push(arr[i]) 
//         }
//     }

//     return strings
// }

// function sorterNumber (arr) {
//      let numbers = []
//      for (let i = 0; i < arr.length; i++) {
//          if (typeof arr[i] ==='number') {
//              numbers.push(arr[i]) 
//          }
//      }

//      return numbers
//  }

// console.log(sorterString(arrTest))
// console.log(sorterNumber(arrTest))

function getNumberString (arr, type) {
    let sAndN = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === type) {
            sAndN.push(arr[i]) 
        }
    }

    return sAndN
}

function numberAndStringSorter (arr) {
    let string = getNumberString(arr, 'string');
    let number = getNumberString(arr, 'number');
    let finalArray = [];
    for (let i = 0; i < string.length; i++) {
        finalArray.push(number[i], string[i])
    }

    return finalArray
}

export default numberAndStringSorter
