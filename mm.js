

function calculateAverage(aar){
    //check if array is not empty
    //check if any object in the array is not a number
    //

    if(aar.length > 0){
        var sum = 0
        for (var i = 0; i<aar.length; i++){
            if (isNaN(aar[i])){
                console.log("This is not Number")
            } else {
                sum += aar[i] / aar.leng
                return sum
            }
        }
    }
    // for(var i= 0; i<aar.length; i++){
    //     if(isNaN(aar[i])){
    //         console.log("This is not Number")
    //     }
    // if( aar){
    // }   sum += aar / aar.length
    // return sum
}


console.log(calculateAverage(arrayEmpty)); 
console.log(calculateAverage([1, 2, 3, 4, 5])); 
console.log(calculateAverage(arrayWithLetters)); 

//console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
//console.log(calculateAverage([])); // Output: "Input array is empty."
//console.log(calculateAverage([1, 2, 'three', 4, 5])); 
// Output: "Invalid input: array contains non-numeric values."