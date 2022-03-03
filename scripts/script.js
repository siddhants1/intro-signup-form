class Validations {

    constructor(param) {
        this.param = param;
    }

    validateName() {
        if (this.param.length > 0) {
            for (let i = 0; i <= 9; i++) {
                for (let j = 0; j < this.param.length; j++) {
                    if (this.param[j] === String(i)) {
                        alert("Invalid Username");
                        return false;
                    }
                }
            }
            return true;
        }
    }

    validateEmail() {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(this.param);
    }

}

firstNameSelector = document.querySelector('[placeholder="First Name"]');
lastNameSelector = document.querySelector('[placeholder="Last Name"]');
emailSelector = document.querySelector('[placeholder="Email"]');
submit = document.querySelector(".form-submit-button");

const objectCreator = (selector) => {
    return new Validations(selector.value);
}

const submitHandler = () => {
    if ((objectCreator(firstNameSelector).validateName() === true) && (objectCreator(lastNameSelector).validateName() === true) &&
     (objectCreator(emailSelector).validateEmail() === true)) {
        return true;
    }
    return false;
}

submit.addEventListener("click", submitHandler);
