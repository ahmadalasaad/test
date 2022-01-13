describe('Lorem Test', () => {
    it('should check the title', () => {
        cy.request('GET', 'https://www.lipsum.com/').its('body').should('include','<h1>Lorem Ipsum</h1>');
      });
   });
  