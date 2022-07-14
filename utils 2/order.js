const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");

const {
edition
  } = require(`${basePath}/src/config.js`);

  let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
  let data = JSON.parse(rawdata);

    function compare(a, b) {
        const data1 = a.edition
        const data2 = b.edition;
      
        let comparison = 0;
        if (data1 > data2) {
          comparison = 1;
        } else if (data1 < data2) {
          comparison = -1;
        }
        return comparison;
      }
      
      console.log(data.sort(compare))
  