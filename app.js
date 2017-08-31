const { Chromeless } = require('chromeless');
const fs = require('fs');
const url = 'http://www.google.com';


async function run(url) {
  const chromeless = new Chromeless();

  const screenshot = await chromeless
    .goto(url)
    .type('chromeless', 'input[name="q"]')
    .press(13)
    .wait('#resultStats')
    .screenshot()


    fs.writeFile('screenshots.txt', JSON.stringify(screenshot), (error) => {
      if (error) throw err;
      console.log('File was saved');
    });

  await chromeless.end();


}

run(url).catch(console.error.bind(console));