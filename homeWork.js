"use strict";
 
let ar = [];
ar[10000]=100;
console.log("length of array = ", ar.length);
console.log("10000 th element =", ar[10000]);
let str = "hello";
let arStr = Array.from(str);//getting array from string's symbols
console.log("string 'hello'->array is",arStr);
// for(let i=0; i< arStr.length;i++){
// console.log(arStr[i]);}
function println (element,index, array){
    console.log("element at index " , index,element);
}
arStr.forEach(println);
let arCodeAscii = arStr.map(function (symbol,index){
    return symbol.charCodeAt() + index;
});
   console.log(arStr,arCodeAscii); 
let sumAscii = arStr.reduce(function(res,cur){
    return res + cur.charCodeAt();
},0);
console.log("sum of ascii",sumAscii);
console.log(arStr.reduce(function(res,cur){
    return res+cur;
},""));