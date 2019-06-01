/* eslint-disable no-undef */

// Login
Cypress.Commands.add('login', (username, password) => {
  cy.get('a')
    .contains('Login')
    .click()

  cy.url().should('include', '/login')

  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)

  cy.get('button')
    .contains('Login')
    .click()

  cy.url().should('include', '/browse')
})

// Book page
Cypress.Commands.add('goToBookPage', () => {
  cy.get('[href="/book/1"] > .v-btn__content').click()
})
