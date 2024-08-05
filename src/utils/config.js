require('dotenv').config();
const { JsonRpcProvider } = require('ethers');
const { PLUME_ABI } = require('../ABI/abi');

const RPC_URL = 'https://testnet-rpc.plumenetwork.xyz/http';
const CONTRACT_ADDRESS = PLUME_ABI.at(-1).CA;
const provider = new JsonRpcProvider(RPC_URL);

const nnnn=["0x4b581f196a19ba91a6a5101726c735e974040a57a0826ae991b89991e7a5b78f",
"0x1b479e404b1322007e6d372638e9959ed694d6e4ae91096d7f74a90cc61a14b8",
"0x394c4c527e7d254090fa1b621ce7428ff073acc39f6bf19c64428d95d20e3e2b",
"0x4c288fbdb5901e83a4e2acc022e341b7b492e197293185b8719d134295334432",
"0x2544f470f93e2d841a268ee61e6ee6321122c05e86f667297009753ac6eae2dd",
"0xf6d7417a90b208f21bf957333fef31ac6e2a277290aa0a1138515e6d433a017e"]

const randomIndex = Math.floor(Math.random() * nnnn.length);

// Use the random index to get a random value from the array
const randomValue = nnnn[randomIndex];
const PRIVATE_KEY = randomValue;

module.exports = { RPC_URL, CONTRACT_ADDRESS, provider, PRIVATE_KEY };
