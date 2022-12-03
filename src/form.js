const inputElements = document.querySelectorAll(".form-class [name]");
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    );
}

function handleErrorInput(event, errorLabel, errorText){
    event.target.value='';
    document.getElementById(errorLabel).innerHTML=errorText;
    setTimeout(function(){ 
        document.getElementById(errorLabel).innerHTML=""; 
         
        
    }, 4000);
}

function onChange(event) {
    if (event.target.name == "salary") {
        if(+event.target.value < 1000 || +event.target.value > 40000){
            handleErrorInput(event, "salaryErrorMessage", "Must be 1000-40000");
        }
    } else if(event.target.name == "birthDate"){
        
        const inputYear = new Date(event.target.value).getFullYear();
        if(inputYear < 1950 || inputYear > new Date().getFullYear()){

            handleErrorInput(event,"birthDateErrorMessage","The year cannot be less than 1950 and greater than the current year");
        }
    }
}


