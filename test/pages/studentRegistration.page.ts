export class StudentRegistrationPage {
    public get studentRegistrationForm() {
        return $('#userForm')
    }

    public get firstNameInput() {
        return $('input#firstName')
    }

    public get lastNameInput() {
        return $('input#lastName')
    }

    public get emailInput() {
        return $('input#userEmail')
    }

    public get phoneInput() {
        return $('input#userNumber')
    }

    public get stateDropdown() {
        return $('#state')
    }

    public get submitButton() {
        return $('#submit')
    }

    public gender(gender: string): any {
        switch(gender) {
            case 'male': {
                return $('input#gender-radio-1')
                break
            }
            case 'female': {
                return $('input#gender-radio-2')
                break
            }
            case 'other': {
                return $('input#gender-radio-3')
                break
            }
        }
    }

    public findState(state: string): any {
        switch(state) {
            case 'NCR': {
                return $('#react-select-3-option-0')
                break
            }
            case 'Uttar Pradesh': {
                return $('#react-select-3-option-1')
                break
            }
            case 'Haryana': {
                return $('#react-select-3-option-2')
                break
            }
            case 'Rajasthan': {
                return $('#react-select-3-option-3')
                break
            }
        }
    }

    open() {
        browser.url('/automation-practice-form')
    }

    fillWith(options: { firstname: string; lastname: string; email: string; phone: string; gender: string; stateValue: string }) {
        this.firstNameInput.setValue(options.firstname)
        this.lastNameInput.setValue(options.lastname)
        this.emailInput.setValue(options.email)
        this.phoneInput.setValue(options.phone)
        this.gender(options.gender).doubleClick()
        this.stateDropdown.waitForClickable()
        this.stateDropdown.click()
        this.findState(options.stateValue).click()
    }

    submitForm() {
        this.submitButton.click()
    }
}