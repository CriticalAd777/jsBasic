function generateRandomTeudatZehut(){
    let teudatZehut = "";
    let sum = 0;
    for(let i = 0;i < 8;i++){
        let randomNumber = Math.floor(Math.random() * 10);
        teudatZehut += randomNumber;
        sum += getCurrent(randomNumber, i);
    }
    if(sum % 10 == 0){
        teudatZehut += '0';
    }
    else{
        let sumGoal = (Math.floor(sum/10)+1) * 10;
        let lastDigit = sumGoal - sum;
        teudatZehut += lastDigit; 
    }   
    return teudatZehut;
}

function getCurrent(number, index){
     let rem = index %2;
     if(rem == 0){
        return number;
     }
     number = number *2;
     if(number < 10){
        return number;
     }
     number = Math.floor(number/10) + number%10;
     return number;
}

function checkTeudatZehut (teudatStrNumber){
    if(isNaN(teudatStrNumber)){
        return false;
    }
    if(teudatStrNumber.toString().length != 9 ){
        return false;
    }
    let arStr = Array.from(teudatStrNumber.toString());

    let sum = 0;
    let cur;

    for(let i = 0;i < arStr.length;i++){
        cur = getCurrent(parseInt(arStr[i]), i);
        sum += cur;
    }
    let sumTz = sum%10;
    if(sumTz == 0){
        return true;
    }
    else{
        return false;
    } 
}

let generatedTeudatZehut = generateRandomTeudatZehut();
console.log(generatedTeudatZehut);
console.log(checkTeudatZehut(generatedTeudatZehut));