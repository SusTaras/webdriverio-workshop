var faker = require('faker');

describe('Student Registration Form', function() {
    it('User should be able to complete the registration', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        
        studentRegistrationForm.$('input#firstName').setValue(faker.name.firstName())
        studentRegistrationForm.$('input#lastName').setValue(faker.name.lastName())
        studentRegistrationForm.$('input#userEmail').setValue(faker.internet.email())
        
        studentRegistrationForm.$('input#gender-radio-1').doubleClick()

        studentRegistrationForm.$('input#userNumber').setValue(faker.phone.phoneNumber('095########'))

        studentRegistrationForm.$('#state').waitForClickable()
        studentRegistrationForm.$('#state').click()
        studentRegistrationForm.$('#react-select-3-option-2').click()



        browser.waitUntil(false.valueOf)

    })
})