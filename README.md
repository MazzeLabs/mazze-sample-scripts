# Mazze NodeJS Script Samples

## Dependencies

Ensure you have the following dependencies installed:

```bash
sudo apt install nodejs
sudo apt install npm
```

Install project dependencies:
```bash
npm install
```


## Configuration

Update the `config.json` file with your specific details:

```json
{
    "addressHex": "0x1e4eaf458e93ad4331e046c72fafc78c1bbba7b5",
    "chainId": 1990,
    "rpcUrl": "http://your-node-ip:52537"
}
```



## Usage

Run the following scripts:

1. Decode Address:
   ```
   node decode-address.js
   ```
   This script formats the config hex address to a Mazze-compatible format.

2. Fetch Address Funds:
   ```
   node fetch-address-funds.js
   ```
   This script fetches the balance of an address in Mazze.
