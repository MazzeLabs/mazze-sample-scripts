const SDK = require("@mazze-labs/mazze-js-sdk");
const { addressHex, chainId, rpcUrl } = require("./config.json");

(async () => {
    const mazze = await SDK.ProxyProvider.create({ url: rpcUrl, networkId: chainId });
    const balance = await mazze.getBalance(addressHex);
    const balanceInMazze = balance / 10n ** 18n;
    console.log(`Address ${addressHex} has balance:\r\nMAZZY: ${balance}\r\nMAZZE: ${balanceInMazze}`);
})();

