

const puppteer = require("puppeteer");
async function run() {
    const browser = await puppteer.launch({
        headless:false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    await page.goto(
        "https://www.bloomberg.com/asia",
        {waitUntil: "networkidle0"}
    );
    await page.screenshot({path:"server/example.png",fullPage:true});
    await browser.close();
    
};

run();

