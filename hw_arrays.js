function minMax (numbers){
    // Using the "Callback function" instead of "Arrow function" for a more readable code
    let minMaxArray = numbers.reduce(function(previousResult, value, index) {
        if(index==0){
            previousResult[0] = value;
            previousResult[1] = value;
        }
        else{
            if(value < previousResult[0]){
                previousResult[0]=value;
            }
            if(value > previousResult[1]){
                previousResult[1]=value;
            }
        }
        return previousResult;
      }, new Array(2));

      return minMaxArray;
}

function deleteWithPrefix(strings, prefix){
    // Not returning in the same line of code for an easier debugging (same for the next examples)
    let stringsUpdated = strings.filter(current => current.startsWith(prefix)==false);
    return stringsUpdated;
}

function getSortedEvenOdd(numbers){
    /*  Didn't understand the Array.sort function enough (specifically logic behind "a" and "b" parameters),
        & how to get the result by using single calls of Array.splice and Array.sort
    */
    let numbersEven = numbers.filter(number => number%2==0).sort((a,b) => a-b );
    let numbersOdd = numbers.filter(number => number %2!==0).sort((a,b) => b-a);
    let numbersResult = numbersEven.concat(numbersOdd);
    return numbersResult;
}

let arr1 = [1,2,3,4,5];
console.log(minMax(arr1));

let arr2 = ["abc", "old_abc", "123", "lmn", "old_lmn"];
console.log(deleteWithPrefix(arr2, "old_"));

let arr3 = [1,6,3,8,5,2,7,4];
console.log(getSortedEvenOdd(arr3));