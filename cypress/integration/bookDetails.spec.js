/* eslint-disable no-undef */
context('Book Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
    cy.login('test', 'test123')
  })

  it('Should go to book details page', () => {
    cy.get('[href="/book/1"] > .v-btn__content').click()
    cy.url().should('include', '/book/1')
  })
})
