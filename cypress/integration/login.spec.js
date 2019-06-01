/* eslint-disable no-undef */
context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  it('Should login', () => {
    cy.get('a')
      .contains('Login')
      .click()

    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('test')
    cy.get('input[name="password"]').type('test123')

    cy.get('button')
      .contains('Login')
      .click()

    cy.url().should('include', '/browse')
  })
})
