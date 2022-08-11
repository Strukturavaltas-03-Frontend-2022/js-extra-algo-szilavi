function getCountOfTheEvenElements (arr) {
    let even = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++
            //even.push(arr[i])
        }
    }
    return even
}

export default getCountOfTheEvenElements
