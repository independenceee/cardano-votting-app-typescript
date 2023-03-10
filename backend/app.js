const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
    projectId: "preprod6tWVdGt9iNTqWIP6xOEBMLPGAmUdreUx"
})

async function runExample() {
    try {

        const assets = await API.assetsById("2af1f550b4b6ec7c13a13d71436c2a41167bb26183a34345f8414cb342616c6c6f742031");

        // console.log(metadata);
        console.log(assets.onchain_metadata);
      const latestBlock = await API.blocksLatest();
      const networkInfo = await API.network();
      const latestEpoch = await API.epochsLatest();
      const health = await API.health();
      const address = await API.addresses(
        "addr_test1qrxssz5390fwsk80c5z7m0hzj59zw6fdxaunaqhcu3kaqaeuu07v2ccqeyv2vfny59tjcz7wc46x6kj7r2w6cxxhhz0s586r9g"
      );
      const pools = await API.pools({ page: 1, count: 10, order: "asc" });
  
    //   console.log("pools", pools);
    //   console.log("address", address);
    //   console.log("networkInfo", networkInfo);
    //   console.log("latestEpoch", latestEpoch);
    //   console.log("latestBlock", latestBlock);
    //   console.log("health", health);


    
    } catch (err) {
      console.log("error", err);
    }
  }

  
runExample();


// function convertFromHex(hex) {
//     var hex = hex.toString();//force conversion
//     var str = '';
//     for (var i = 0; i < hex.length; i += 2)
//         str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
//     return str;
// }

// function convertToHex(str) {
//     var hex = '';
//     for(var i=0;i<str.length;i++) {
//         hex += ''+str.charCodeAt(i).toString(16);
//     }
//     return hex;
// }

// console.log(convertToHex("Ballot 1"))