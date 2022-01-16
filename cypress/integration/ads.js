
const ads=require('../fixtures/allAds');
const { utilities } = require('../src/utilities');
describe('Forbes Ads Test', () => {
    it('should change the color green and red', () => {
        cy.visit("https://www.forbes.com/");
        let i=0;
        cy.window().then((win) => {
			win.fbsads.adSlots.forEach((ad,k) => {
                expect(ad.getTargetingMap().slotId[0]).to.be.eq(ads.ads[i].slotId);
                expect(utilities.getSizes(ad.getTargetingMap().slotId[0])).to.be.eq(ads.ads[i].sizes);
                i++;
            });
    });
    
});

});