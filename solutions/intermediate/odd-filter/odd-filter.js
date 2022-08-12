function getOddEvenElements (arr, searchValue) {
    let oddCounter = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCounter.push(arr[i])
        }
    }

    return oddCounter
}

export default getOddEvenElements