import userdata from '../fixtures/userData.json'

describe('Orange HRM tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashbiardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }




  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userdata.userSuccess.username)
    cy.get(selectorList.passwordField).type(userdata.userSuccess.userpassword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbiardGrid)

  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userdata.userFailed.username)
    cy.get(selectorList.passwordField).type(userdata.userFailed.userpassword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    })
})