import { utilities } from "../src/utilities";
const ads=require('../fixtures/allAds');
describe('Forbes Ads Test', () => {
    before (()=>{
        cy.visit("https://www.forbes.com/")
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.wait(1000)

        cy.scrollTo('bottom')
        cy.wait(1000)
    });
    // it('should check the ads opject', () => {
    //     let i=0;
    //     utilities.getAdSlots().then((map)=>{
    //     map.forEach((v,k)=>{
    //         utilities.getTargetMap(k).then((targetedAD)=>{
    //             const entries = Object.entries(targetedAD);
    //             const enAd=Object.entries(ads.ads[i]);
    //             let filteredAd= entries.filter(arr=>arr[0].charAt(0)!=='m'&&arr[0].charAt(0)!=='a'&&arr[0].charAt(0)!=='i');
    //             expect(filteredAd).to.be.deep.equal(enAd)
    //         i++;
    //         });
    //     });
    //     });
    // });
    ads.ads.forEach(element => {
        it(`should check the properties for ${element.slotId}`, () => {
               utilities.allPropTestInAds(element);
        })
    });

        // ads.ads.forEach((ad)=>{
        //     utilities.getTargetMap(ad.slotId[0]).then((targetedAD)=>{
        //         const entries = Object.entries(targetedAD);
        //         const enAd=Object.entries(ad);
        //         let filteredAd= entries.filter(arr=>arr[0].charAt(0)!=='m'&&arr[0].charAt(0)!=='a'&&arr[0].charAt(0)!=='i');
        //         expect(filteredAd).to.be.deep.equal(enAd)
        //     })
        // })    
// });
});
