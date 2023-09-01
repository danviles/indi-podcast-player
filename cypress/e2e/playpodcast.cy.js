describe('Top 100 podcasts E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it ('Render filter podcasts input', () => {
    cy.get('.justify-cente > .h-12').should('exist')
    cy.get('.justify-cente > .h-12').should('contain', 'Filter podcasts...')
  })

  it ('Find elvis podcast', () => {
    cy.get('input[id=":r1:"]').click().type('Elvis')
    cy.get('h1').should('contain', 'DISGRACELAND')
  })

  it ('Play first episode of DISGRACELAND podcast', () => {
    cy.get('input[id=":r1:"]').click().type('Elvis');
    cy.get(':nth-child(1) > .relative').click();
    cy.get(':nth-child(1) > .css-1ex1afd-MuiTableCell-root').should('be.visible').click();
})
})