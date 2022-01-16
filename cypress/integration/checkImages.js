import { utilities } from "../src/utilities";

describe('Forbes  Test', () => {
    let req;
    let firstViewGridLength;
    before(() => {
        cy.visit("https://www.forbes.com/pictures/5988c29e31358e60d7759275/50-years-of-innovation-st/");
        cy.request('https://bacon.forbes.com/bacon-forbes-prd/most-popular-galleries-1yr/payload.json').then((res) => {
            req = JSON.parse(res.body);
 
        })
        cy.get(utilities.gridItem).its('length').then((itemListLength)=>{
            firstViewGridLength=itemListLength;
        })
    });

    it('should check the images', () => {
            // cy.get(utilities.unVisibileGridContainer).each((item) => {
                // cy.get(utilities.allGridCntainer).find(utilities.gridItem).each((listItem, i) => {
                    // cy.get(listItem).find('a').should('have.css', 'background-image').then((bImg => {
                    //     expect("url(" + '"' + req[i].image + '"' + ")").to.eq(bImg);
                    // }));

                    // cy.get(listItem).find('a').should('have.attr', 'href').then((href) => {
                    //     expect(req[i].uri).to.eq(href);
                    // });
                // });
                cy.get(utilities.ShowMoreButton).click();
                cy.get(utilities.gridItem).its('length').then((itemListLength)=>{
                    expect(itemListLength).to.not.eq(firstViewGridLength);
                });

            // });

            // }
        // })

    });
});