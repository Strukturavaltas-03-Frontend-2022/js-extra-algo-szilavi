function sortByAsc (arr) {
    let length = arr.length;
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr [i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp
            i = -1
        }

        }

        return arr
    }

export default sortByAsc