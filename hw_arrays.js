function ulSurround(strings){
    let newLength = strings.length + 2; // The length for the new array.
    let outputStrings = new Array(newLength);
    outputStrings.push("<ul>");
    for(let i=0;i< strings.length;i++){     // "for" loop used for a more readable and debuggable code
        // Initialized a new variable (instead of shortening the solution into a single line),  for a more readable and debuggable code
        let valueToPush = "<li>" + strings[i] + "</li>";
        outputStrings.push(valueToPush);
    } 
    outputStrings.push("</ul>");
    return outputStrings;
}

function count(strings, string){
    let counter = 0;
    for(let i=0; i < strings.length;i++){
        if(string==strings[i]){
            counter++;
        }
    }
    return counter;
}
let strings1 = ["abc", "lmn", "cd"];
let ulSurrounding = ulSurround(strings1);
console.log(ulSurrounding);
let strings2 = ["abc", "lmn", "cd", "abc", "abc"];
console.log(count(strings2, "abc"));