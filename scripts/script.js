class Validations {

    constructor(param) {
        this.param = param;
    }

    validateName() {
        if (this.param.length > 0) {
            for (let i = 0; i <= 9; i++) {
                for (let j = 0; j < this.param.length; j++) {
                    if (this.param[j] === String(i)) {
                        console.log("Invalid Input");
                        break;
                    }
                }
            }
        }
    }

}

firstNameSelector = document.querySelector('[placeholder="First Name"]');
lastNameSelector = document.querySelector('[placeholder="Last Name"]');
emailSelector = document.querySelector('[placeholder="Email"]');

const objectCreator = (selector) => {
    if(selector.value.length > 0) {
        return new Validations(selector.value);
    }
}

// firstNameSelector.addEventListener("input", objectCreator(firstNameSelector).validateName);
// lastNameSelector.addEventListener("input", objectCreator(lastNameSelector).validateName);
