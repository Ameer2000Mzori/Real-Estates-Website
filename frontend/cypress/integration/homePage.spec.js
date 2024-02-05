describe('Home Page', () => {
  it('Displays the list of houses with prices', () => {
    cy.visit('/') // Assuming your home page is located at '/'

    // Assuming the list of houses is rendered inside an element with a specific class
    cy.get('.houses-list').should('exist')

    // Assuming each house is represented by a list item with a specific class
    cy.get('.houses-list li').should('have.length.greaterThan', 0)

    // Check if the price is displayed for each house
    cy.get('.houses-list li').each((house) => {
      cy.wrap(house).should('contain.text', '$')
    })
  })
})
