describe('Forbes Ads Test', () => {
    it('should check the clickabilty of videos desk', () => {
        cy.visit("https://www.forbes.com/series/unconventional-minds/")
        cy.get('a.grid__image').first().click({ force: true });
    });
});
