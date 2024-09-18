const SDK = require("@mazze-labs/mazze-js-sdk");
const { addressHex, chainId } = require("./config.json");


const formattedAddress = SDK.format.address(addressHex, chainId);

console.log(`Input hex address: ${addressHex}`);
console.log(`Formatted address: ${formattedAddress}`);