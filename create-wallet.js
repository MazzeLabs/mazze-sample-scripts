const SDK = require("@mazze-labs/mazze-js-sdk");
const { addressHex, chainId, rpcUrl } = require("./config.json");

const run = async () => {
    const mazze = await SDK.ProxyProvider.create({ url: rpcUrl, networkId: chainId });
    const wallet = await mazze.wallet.addRandom();
    console.log(`Address: ${wallet.address}`);
    console.log(`Private Key: ${wallet.privateKey}`);
}

(async () => {
    await run();
})();