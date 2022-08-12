
export function getSumOfTheElements (arr) {
    let arrAllSum = 0
    for (let i = 0; i < arr.length; i++) {
        arrAllSum += arr[i]
    }

    return arrAllSum
}

export function getAvarageOfTheElements (arr) {
    return getSumOfTheElements(arr) / arr.length

}


    
    
    
