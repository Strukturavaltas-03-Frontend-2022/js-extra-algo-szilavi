function getTheSmallestElement (arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minNumber) {
            minNumber = arr[i]
            }
        }
        return minNumber
    }

export default getTheSmallestElement
