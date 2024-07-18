const fs = require("fs");
const axios = require("axios");
const { URL } = require("url");

let FILENAME = process.argv[2];

fs.readFile(FILENAME, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading this file", err);
    process.exit(1);
  }

  let urls = data.trim().split("\n");
  urls.forEach((url) => {
    getURL(url);
  });
});

async function getURL(url) {
  try {
    let response = await axios.get(url);
    let hostname = new URL(url).hostname;
    let fileName = `${hostname}.html`;

    fs.writeFile(fileName, response.data, (error) => {
      if (error) {
        console.error(`Error writing to file ${fileName}`, error);
      } else {
        console.log(`Wrote to ${hostname}`);
      }
    });
  } catch (error) {
    console.error(`Could not fetch ${url}`, error);
  }
}
