"use strict";
/**
 * Exercise 4
 *
 * Please open https://google.com in a headless browser. Once done enter "javascript" into the search field and go to the results page.
 * Follow the first non-ad result and save a screenshot of the page.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Nightmare = require('nightmare')
const puppeteer = require('puppeteer');

class Exercise4 {
    constructor() {
        this.run();
    }
    run() { 
    	const nightmare = Nightmare()
	    

	    nightmare
	    	.goto('https://google.com')
	    	.type('input[class="gLFyf gsfi"]', 'javascript')
	      	.click('.gNO89b')
	      	.wait(1000)
	      	.evaluate(() => document.querySelector('#rso').querySelectorAll('.bkWMgd')[0].querySelectorAll('.srg')[0].querySelectorAll('.g a')[0].href)
		    .then((link) => {
		    	nightmare
		    		.goto(link)
					.end()
					.then(() => {				  
						(async () => {
						  const browser = await puppeteer.launch();
						  const page = await browser.newPage();
						  await page.goto(link);
						  await page.screenshot({path: 'first_page.png'});
						  await browser.close();
						})();
					});
		  	})
    }
}
exports.default = Exercise4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQUVILE1BQXFCLFNBQVM7SUFDMUI7UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sR0FBRyxLQUFVLENBQUM7Q0FDeEI7QUFORCw0QkFNQyJ9