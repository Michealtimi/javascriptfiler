function calculateAverage(Arr) {
    let sum = 0
    if (Arr.length > 0) {
        for (var i = 0; i < Arr.length; i++) {
            if (isNaN(Arr[i])) {
                console.log(Arr[i], "is a not valid number")
                return null
            } else {
                console.log(Arr[i], "is a valid number")
                sum += Arr[i]

            }
        }
        const plus = sum
        const average = plus / Arr.length
        console.log("average is ", average)
    
    } else {
        console.log("this is an empty array")
    }

}
// calculateAverage([]);
calculateAverage([1, 2, 3, 4])