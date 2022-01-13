import { utilities } from "../src/utilities";

describe('Forbes  Test', () => {
    it('should change the color green and red', () => {

        cy.intercept('https://bacon.forbes.com/bacon-forbes-prd/most-popular-galleries-1yr/payload.json', utilities.img).as('images');
        
        cy.visit("https://www.forbes.com/pictures/5988c29e31358e60d7759275/50-years-of-innovation-st/");
        // cy.get('.grid__image').each((image,index) => {
            

        // })  
        cy.wait('@images').its('response.body').should('eq', 200);

    });
});