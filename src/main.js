import { Library } from "./data/library.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { EmployeesList } from "./ui/EmployeesList.js";
import { SalariesForm } from "./ui/SalariesForm.js";
import { AuthorsForm } from "./ui/AuthorsForm.js";
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_YEAR = 1980;
const ACTIVE = "active";

const listAllEmployees = new EmployeesList("employees-all");
const listEmployeesBySalary = new EmployeesList("employees-salary");
const listEmployeesByAuthor = new EmployeesList("books-author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");


const library = new Library();          // 4

const paramsEmployeeForm = {
    idForm: "employee_form", 
    idDateInput: "date_input",
    idSalaryInput: "salary_input",
     idDateError: "date_error",
      idSalaryError: "salary_error",
    minYear: MIN_YEAR, minSalary: MIN_PAGES, maxSalary: MAX_PAGES
}
const employeeForm = new EmployeeForm(paramsEmployeeForm);
employeeForm.addSubmitHandler((book) => library.addBook(book));

const paramsSalaries = {
    idForm: "salary-form", idSalaryFromInput: "salaryFrom",
    idSalaryToInput: "salaryTo", idErrorMessage: "salary_form_error"
}
const salariesForm = new SalariesForm(paramsSalaries);
salariesForm.addSubmitHandler((salariesObj) => {
    const employees = library.getBooksByPages(salariesObj.salaryFrom,
        salariesObj.salaryTo);
    listEmployeesBySalary.showEmployees(employees);

});

const paramsAuthor= {
    idForm: "author-form", idAuthor: "author"
};
const authorForm = new AuthorsForm(paramsAuthor);
authorForm.addSubmitHandler((author) => {
    const employees = library.getAuthorBooks(author);
    listEmployeesByAuthor.showEmployees(employees);

});

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        listAllEmployees.showEmployees(books);
    }
}


window.showSection = showSection;
