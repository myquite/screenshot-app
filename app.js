const { Chromeless } = require('chromeless');
const path = require("path");

const url = 'https://myquite.github.io/';

async function run(url) {
  const chromeless = new Chromeless();

  const screenshot = await chromeless
    .goto(url)
    .screenshot({ filePath: path.join(__dirname, 'screen-shot.png') }); // TODO Fix this to add file to local working directory.

    console.log(screenshot);
  await chromeless.end();
}

run(url).catch(console.error.bind(console));