import { utilities } from "../src/utilities";

describe('Super Hero Test', () => {
    it('should change the body', () => {
        cy.intercept('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', utilities.hero).as('body');
        cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html');
        cy.wait('@body').its('response.statusCode').should('eq', 200);

    });
});
