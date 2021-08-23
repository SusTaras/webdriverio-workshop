import * as chai from 'chai'
import { StudentRegistrationPage } from './pages/studentRegistration.page';
const expectChai = chai.expect
const assert = chai.assert

var faker = require('faker');

chai.should() // patch Object to include should method

describe('Student Registration Form', function() {
    before(function() {
        console.log('First before all')
    })

    before(function() {
        console.log('Second before all')
    })
    
    beforeEach(function() {
        console.log('Before each hook!')
    })

    afterEach(function() {
        console.log('After each hook')
    })

    after(function() {
        console.log('After all hook')
    })

    it.skip('Should assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        studentRegistrationForm.isDisplayed().should.be.true;
        studentRegistrationForm.isDisplayed().should.be.equal(true, "Element is not displayed");
    })

    it.skip('Expect assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        expectChai(studentRegistrationForm.isDisplayed(), "Student registration form is not displayed").to.be.true;
    })

    it.skip('Assert assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        assert.isTrue(studentRegistrationForm.isDisplayed(), "Student registration form is not displayed")
    })

    it.skip('Expect from WDIO framework', function() {
        browser.url('/automation-practice-form')

        expect($('#userForm')).toBeDisplayed();
    })

    it('User should be able to complete the registration', function() {
        let studentRegistrationPage = new StudentRegistrationPage()

        studentRegistrationPage.open()
        studentRegistrationPage.fillWith({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber('095########'),
            gender: 'female',
            stateValue: 'Rajasthan'
        })
        studentRegistrationPage.submitForm()
        browser.pause(5000)
        })

    // data provider
    let dataList = [1, 2, 3, 4, 5]
    dataList.map(data => {
        it.skip('test', function() {
            console.log(`Test ${data}`)
        })
    })
})