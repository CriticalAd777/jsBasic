export class EmployeesList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showEmployees(employees) {
        this.#listElement.innerHTML = getEmployeeItems(employees);
    }
}
function getEmployeeItems(employees) {
    return employees.map(e =>
        `<li class="employees-item">
              <div class="employees-item-container">
                 <p class="employees-item-paragraph">Title: ${e.book_title} </p>
                 <p class="employees-item-paragraph">Author: ${e.author} </p>
                 <p class="employees-item-paragraph">Genre: ${e.genre}</p>
                 <p class="employees-item-paragraph">PublishDate: ${e.publishDate}</p>
                 <p class="employees-item-paragraph">Pages: ${e.pages}</p>
              </div>
          </li>`).join('');
}