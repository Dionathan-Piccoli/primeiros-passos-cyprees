import userdata from '../../fixtures/userData.json'

describe('Orange HRM tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashbiardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfobutton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:'[name="firstName"]',
    middleNameField:".orangehrm-middlename",
    lastNameField:'[name="lastName"]',
    genericField:".oxd-input--active",
    dataField:"[placeholder='yyyy-dd-mm']",
    dataCloseField:".--close",
    submitButton:"[type='submit']"

   
  }




  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userdata.userSuccess.username)
    cy.get(selectorList.passwordField).type(userdata.userSuccess.userpassword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbiardGrid)
    cy.get(selectorList.myInfobutton).click()
    cy.get(selectorList.firstNameField).clear({force: true}).type('FirstNameTest'),
    cy.get(selectorList.middleNameField).clear({force: true}).type('MidlleNameTest'),
    cy.get(selectorList.lastNameField).clear({force: true}).type('LastNameTest'),
    cy.get(selectorList.genericField).eq(3).clear({force: true}).type('NickTest'),
    cy.get(selectorList.genericField).eq(4).clear({force: true}).type('EIdTest'),
    cy.get(selectorList.genericField).eq(5).clear({force: true}).type('OtherIdTest'),
    cy.get(selectorList.genericField).eq(6).clear({force: true}).type('DriversLicenseNumberTest'),
    cy.get(selectorList.dataField).eq(0).clear({force: true}).type('2026-11-06'),
    cy.get(selectorList.submitButton).eq(0).click(),
    cy.get('body').should('contain', 'Successfully Updated'),
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userdata.userFailed.username)
    cy.get(selectorList.passwordField).type(userdata.userFailed.userpassword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})