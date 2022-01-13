import { utilities } from '../src/utilities'
describe('Views Test', () => {
    it('should check  number of views', () => {
        cy.intercept('https://www.forbes.com/tamagotchi/v1/fetchLifetimeViews/?id=blogAndPostId/blog/post/6625-61d65858aeff3c0001248fc2', utilities.views).as('views');
        cy.visit('https://www.forbes.com/sites/jonathanburgos/2022/01/05/singapores-next-gen-tycoons-join-nft-craze-with-launch-of-collaboration-platform-for-entrepreneurs/');
        cy.get('.pageviews').then((spn) => {
            cy.wait('@views').its('response.body.views').should('eq', Number(spn.text().replace(/[, ]+/g, "").trim().split('v')[0]));

        });
    });
});
