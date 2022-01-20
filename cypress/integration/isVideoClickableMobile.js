describe('Forbes Ads Test', () => {
    it('should check the clickabilty of videos mobile', () => {
        // cy.viewport('iphone-6')
        cy.visit("https://www.forbes.com/series/unconventional-minds/")
        cy.get('a.grid__image').first().click({ force: true })
    });
});
