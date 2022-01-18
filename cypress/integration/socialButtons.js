describe('Forbes Social Buttons Test', () => {

   before(() => {
        cy.viewport(1280, 720);
        cy.visit('https://www.forbes.com/pictures/5988c29e31358e60d7759275/50-years-of-innovation-st/')
        cy.window().then((win) => {
            cy.stub(win, 'open').as("popup");
        })
    });

    it('should check the social button facebook', () => {
            cy.get(".fs-icon--facebook").should('exist').click({ force: true });
            cy.get(".social-share__icon--facebook").should('have.attr', 'href').then((href) => {
                cy.get("@popup").should('be.calledWith', href);
                // cy.closeWindow('@popup');
            });

            cy.get(".fs-icon--twitter").should('exist').click({ force: true });
            cy.get(".social-share__icon--twitter").should('have.attr', 'href').then((href) => {
                cy.get("@popup").should('be.calledWith', href);
            });
            
            cy.get(".fs-icon--linkedin").should('exist').click({ force: true });
            cy.get(".social-share__icon--linkedin").should('have.attr', 'href').then((href) => {
                cy.get("@popup").should('be.calledWith', href);
            });
    });
});
