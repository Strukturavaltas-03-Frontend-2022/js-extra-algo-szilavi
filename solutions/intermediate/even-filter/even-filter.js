function getTheEvenElements (arr) {
    let evenCount = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
        evenCount.push(arr[i])
        }
    }

    return evenCount
}

export default getTheEvenElements