require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember smile imitate private foster spare'; 
let testAccounts = [
"0xa84829932b4387b13ed2e89096a054b3efc7359ea29af524e9a59fe31ef65c83",
"0x382e399e6548d8936d8e00180b7541d02549be83613183d364c4d3b6ba3d110c",
"0x969f1e5e0585d5551447f172f19bf6659bc2072d1d312cd949afc73a0d7beb5c",
"0xd3d3c56892538976772df7f52b058f02416584881f75f1b84f224c59850afc73",
"0xfe411f25795a988d56adc830ff9ae03fd464f8a2b9296213fb8e7df050b97b04",
"0x264abb45aa65702cc5fce4bea12c04c4ca65a3b592f703e65e146c7cf58dc7a3",
"0x31515412c9e5a09dd56199d20d5e8d3d5bc6bfc84bf5b178e86f29ef88d6645d",
"0xcdd9a66ee24e6774f50790458159307803ac362026c8774efa09bdeae06a2f66",
"0x32cff26b6c24ec03ffb9ba012b08a8c9f7779c7c42180a19de4117040600ffef",
"0x309a470b8d1d659391df0af352624f0879f8588de9268a03416730638cabe476"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
