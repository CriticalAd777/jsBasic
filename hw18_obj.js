function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    // Check, the words are not same
    const result = {};
    for(let i=0;i<str1.length;i++){
        let sym = str1[i];
        result[sym] = result[sym] ? result[sym] += 1 : result[sym] = 1;
    }
    
    for(let i=0;i<str2.length;i++){
        let sym = str2[i];
        if (!result[sym]){
            return false;
        }else {
            result[sym]-=1;
        }
    }
    return true;
}
console.log(isAnagram("yellow","ylelow"));
