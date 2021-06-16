require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strike rival magic history give kite army giant'; 
let testAccounts = [
"0x01a9e8c32c4e510b7bcb88e48026d04b6103a9f24b2b8bdfcb40493e4a4acb78",
"0x56933396657457cfeefbee8228ec55ce65a2e9045c32ca1648268b95250d0599",
"0xd5cf2fe8011bab2960a5c0c186eaaa955b940351ee541b6e3e3bf19eaf9a1250",
"0x7e4141582b98e052d68549c8a4072a3d5b643c25603d6ab07572da4613b6a507",
"0x3b847987199b917167e4ce4112f61fb7142c8cd037574011c754758dc840b945",
"0xd17a63351f0fbbc86505b99e77ef07e05ab77a5317c18a8c9aca09ab89f6e04a",
"0x6e4c0f711e1d2d1bbe1543a6a55f6afbcff7d2cc39b9126851a96930d37df991",
"0xd16e411ce4de6417783b8bbd590cdeaab9dd5918de1b9a014d38e9053b2ef537",
"0x6a4306ce05a5922fbbaf54055a6db7e15a71774ab82e433c063201f0e17905f3",
"0x094004e277f8743f8ee63face992655ec487a0f1da522b2534e1dcd42492ab56"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

