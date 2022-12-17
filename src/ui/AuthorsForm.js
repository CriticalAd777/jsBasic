export class AuthorsForm{
    #formElement;
    #authorInputElement;

    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthor);         
    }

    addSubmitHandler(processSalariesFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author = this.#authorInputElement.value;
            processSalariesFun(author);
        });
    }
}