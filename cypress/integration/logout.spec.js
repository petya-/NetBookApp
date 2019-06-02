/* eslint-disable no-undef */
context('Logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
    cy.login('test', 'test123')
  })

  it('Should logout', () => {
    cy.url().should('include', '/browse')

    cy.get('.v-toolbar__content > .v-btn--flat > .v-btn__content').click()
    cy.url().should('include', '/')

    cy.url().should('not.contain', '/browse')
  })
})
