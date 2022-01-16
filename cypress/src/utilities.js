export class Utilities {

    dropDownItem = '.a-dropdown-item';
    productLIst = '.sg-col-inner';
    dropDownButton = '#a-autoid-0-announce';
    tabSearchtTextBox = '#twotabsearchtextbox';
    allButton = '.hm-icon';
    title = 'svg title';
    allGridCntainer='.grid__wrapper:not(.grid__wrapper--lazy)';
    unVisibileGridContainer='.grid__wrapper--lazy';
    gridItem='.grid__wrapper:not(.grid__wrapper--lazy) .grid__item';
    ShowMoreButton='.grid__load-more';
    hero = {
        "squadName": "Super Hero Squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "Ahmad Alasa'd",
                "age": 25,
                "secretIdentity": "Automation",
                "powers": [
                    "JAVA",
                    "Android",
                    "Cypress",
                    "Nodejs",
                    "Js"
                ]
            }
        ]
    };

    hog={
        "PercentChangeFromPreviousClose": 2.551
        };
        wgo={
            "PercentChangeFromPreviousClose": -5.343
            };
    views={
        "id": "blogandpostid/blog/post/6625-61d65858aeff3c0001248fc2",
        "views": 7070
        };
        
        // getSizes(position) {
        //     return cy.window().then((win) => {
        //         this.win = win;
        //         return win.fbsads.getSizes(position);
        //     });
        // }
    

}
export const utilities = new Utilities();