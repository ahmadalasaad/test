import { utilities } from "../src/utilities";

describe('Forbes  Test', () => {
    it('should change the color green and red', () => {

        cy.intercept('https://www.forbes.com/xignite/?identifier=WGO', utilities.wgo).as('wgo');
        cy.intercept('https://www.forbes.com/xignite/?identifier=HOG', utilities.hog).as('hog');

        cy.visit("https://www.forbes.com/sites/sergeiklebnikov/2020/04/16/here-are-29-get-out-and-go-stocks-for-the-end-of-coronavirus-quarantine/?sh=8556d631a4fb")

        cy.wait('@hog').its('response.statusCode').should('eq', 200);
        cy.contains('HOG').parent().find('span').should('have.class', 'ticker-green');

        cy.wait('@wgo').its('response.statusCode').should('eq', 200);
        cy.contains('WGO').parent().find('span').should('have.class', 'ticker-red')

    });
});
