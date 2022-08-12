function searchAndCount (arr, searchValue) {
    let arrCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
            arrCount++
        }
    }

    return arrCount
}

export default searchAndCount