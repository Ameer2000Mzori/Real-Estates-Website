// cypress/integration/homePage.spec.js
describe('HomePage', () => {
  it('should display list of houses', () => {
    cy.visit('http://localhost:3000') // Assuming your HomePage is the root route

    // Assuming you have a specific selector for a house element
    cy.get('.house-list').should('have.length.greaterThan', 0)
  })
})
