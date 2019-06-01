/* eslint-disable no-undef */
context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
    cy.login('test', 'test123')
  })

  it('Can post a review', () => {
    cy.goToBookPage()
    cy.get('input[name="title"]').type('The best book I have ever read')
    cy.get('input[name="content"]').type('Without a doubt a classic')

    cy.get(
      '.xs5 > .v-card > .v-card__actions > .v-btn > .v-btn__content'
    ).click()

    cy.contains('The best book I have ever read')
    cy.contains('Without a doubt a classic')
  })

  it('Can delete a review', () => {
    cy.goToBookPage()
    cy.get(
      ':nth-child(3) > .v-list__tile > .v-list__tile__action > .v-icon'
    ).click()

    cy.should('not.contain', 'The best book I have ever read')
    cy.should('not.contain', 'Without a doubt a classic')
  })
})
