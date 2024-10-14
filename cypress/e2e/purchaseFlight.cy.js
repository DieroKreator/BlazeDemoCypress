describe('Purchase Flights', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Purchase flight Philadelphia - New York', () => {

    cy.title()
      .should('eq', 'BlazeDemo')

    // Choose departure
    cy.get('select[name="fromPort"]')
      .select('Philadelphia')

    // Choose destination
    cy.get('select[name="toPort"]')
      .select('New York');

    // Click on 'Find Flights' button
    cy.get('.btn-primary')
      .click()

    // Validate title on new page
    cy.get('h3')
      .should('have.text', 'Flights from Philadelphia to New York: ')

    // Select the last flight from the list
    cy.get('table tbody tr')
      .last()
      .find('input[type="submit"]')
      .click()

    // Validate title on purchase page
    cy.get('h2')
      .should('have.text', 'Your flight from TLV to SFO has been reserved.')

    // Fiil in the form
    cy.get('#inputName')
      .type('John')

    cy.get('#address')
      .type('23 Main st')

    cy.get('#city')
      .type('Philadelphia')

    cy.get('#state')
      .type('Pennsylvania')

    cy.get('#zipCode')
      .type('458515')

    cy.get('#creditCardNumber')
      .type('4567875245814582')

    cy.get('#creditCardMonth')
      .type('10')

    cy.get('#creditCardYear')
      .type('2024')

    cy.get('#nameOnCard')
      .type('John Test')

    // Click over Purchase Flight button
    cy.get('.btn-primary')
      .click()

    // Validate title on purchase page
    cy.get('h1')
      .should('have.text', 'Thank you for your purchase today!')

  })
})