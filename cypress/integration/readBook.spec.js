/* eslint-disable no-undef */
context('Read Book', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
    cy.login('test', 'test123')
  })

  it('Should go to read book page', () => {
    cy.goToBookPage()
    cy.get('.xs4 > .v-card > .v-card__actions > .v-btn > .v-btn__content')
      .contains('Read')
      .click()

    cy.url().should('include', '/read/1')
  })
})
