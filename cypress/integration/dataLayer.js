import { utilities } from "../src/utilities";
const ads=require('../fixtures/allAds');
describe('Forbes Ads Test', () => {
       
        it(`should check the properties for dataLayer`, () => {
        cy.visit("https://www.forbes.com/")
               utilities.allPropTestInDataLayer(ads.allPropTestInDataLayer);
        });

});
