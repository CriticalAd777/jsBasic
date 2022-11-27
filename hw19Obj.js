
function createEmployee(id, name, birthYear, salary) {
    return {id, name, birthYear, salary};
}

function getValueBetween(minValue, maxValue){
    let value = Math.floor(Math.random() * (maxValue - minValue) + minValue);
    return value;       
}

function getNewEmployeeId(idDigits){
    let minValue = Math.pow(10, idDigits-1);
    let maxValue = Math.pow(10, idDigits);
    let id = getValueBetween(minValue, maxValue);
    return id;
}

function createRandomEmployees(nEmployees,idDigits,minSalary,maxSalary,minBirthYear,maxBirthYear){
    if(maxSalary < minSalary || maxBirthYear < minBirthYear){
        console.log("Bad input");
        return null;
    }

    
    const employeesArray = [];

    for(let i = 0; i<nEmployees; i++){
        let id = getNewEmployeeId(idDigits);
        let name = "name " + id;
        let salary = getValueBetween(minSalary, maxSalary);
        let birthYear = getValueBetween(minBirthYear, maxBirthYear);
        const freshEmployee = createEmployee(id, name, birthYear, salary);
        employeesArray.push(freshEmployee);
    }

    return employeesArray;
}

function getAverageAge(employees){
    let sumAge = employees.reduce(function(result, employee) {
        let age = new Date().getFullYear() - employee.birthYear;
        return result + age;
      }, 0);
    return sumAge / employees.length;
}

function getEmployeesBySalary(employees, minSalary, maxSalary){
   if(maxSalary < minSalary){
        console.log("Bad input");
        return null;
   }
    let specificEmployees = employees
        .filter(employee => employee.salary > minSalary && employee.salary < maxSalary)
        .sort((a,b) => a.salary-b.salary);
    
    return specificEmployees;

}

function increaseSalary(employees, borderSalary, percent){
    let employeesUpdated = employees
    .filter(employee => employee.salary < borderSalary)
    .map(employee => employee.salary += employee.salary*(percent/100));

    return employeesUpdated;
}

const employeesArray = createRandomEmployees(4, 1, 6000, 15000, 1960, 2000);
if(employeesArray != null){
    console.log("Average age: " + getAverageAge(employeesArray));

    const specificEmployees = getEmployeesBySalary(employeesArray, 10000, 12000);
    if(specificEmployees != null){
        console.log("Employees within min-max salary: ");
        specificEmployees.forEach(employees => console.log(employees));
    }

    const employeesUpdated = increaseSalary(employeesArray, 10000, 10);
    console.log("Employees with updated salary: ");
    employeesUpdated.forEach(employees => console.log(employees));
}