describe('anecdotes spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('home opens', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Anecdotes')
  })

  it('home opens', () => {
    cy.visit('http://localhost:3000')
    cy.contains('vote').click()
    cy.contains('4')
  })
})