import * as chai from 'chai'
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

    it('Should assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        studentRegistrationForm.isDisplayed().should.be.true;
        studentRegistrationForm.isDisplayed().should.be.equal(true, "Element is not displayed");
    })

    it('Expect assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        expectChai(studentRegistrationForm.isDisplayed(), "Student registration form is not displayed").to.be.true;
    })

    it('Assert assertion from chai', function() {
        browser.url('/automation-practice-form')

        const studentRegistrationForm: WebdriverIO.Element = $('#userForm')
        assert.isTrue(studentRegistrationForm.isDisplayed(), "Student registration form is not displayed")
    })

    it('Expect from WDIO framework', function() {
        browser.url('/automation-practice-form')

        expect($('#userForm')).toBeDisplayed();
    })

    it.skip('User should be able to complete the registration', function() {
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

        expect(browser.getTitle).toHaveTitle    

    })

    // data provider
    let dataList = [1, 2, 3, 4, 5]
    dataList.map(data => {
        it.skip('test', function() {
            console.log(`Test ${data}`)
        })
    })
})