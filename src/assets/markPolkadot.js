const markdownPolkadot = `
## Moonbase Alpha, The Moonbeam TestNet

## Goal

The first Moonbeam TestNet, named Moonbase Alpha, aims to provide developers with a place to start experimenting and building on Moonbeam in a shared environment. Since Moonbeam will be deployed as a parachain on Kusama and Polkadot, we want our TestNet to reflect our production configuration. For this reason, we decided that it needed to be a parachain-based configuration rather than a Substrate standalone setup.

In order to collect as much feedback as possible and provide a fast resolution to issues, we have set up a [Discord with a dedicated Moonbase AlphaNet channel](https://discord.gg/PfpUATX).


## Initial Configuration

### Moonbase Alpha has the following configuration:

• Moonbeam runs as a parachain connected to a relay chain

• The parachain has two collator (hosted by PureStake) that are collating blocks

• The relay chain hosts three validators (hosted by PureStake) to finalize relay chain blocks. One of them is selected to finalize each block collated by Moonbeam's collators. This setup provides room to expand to a two-parachain configuration in the future

• There are two RPC endpoints (hosted by PureStake). People can run full nodes to access their own private RPC endpoints.


![meta](https://docs.moonbeam.network/images/testnet/Moonbase-Alpha-v5.png)

## Features

> The following features are available:

• Fully emulated Ethereum block production in Substrate (Ethereum pallet) 

• Dispatchable functions to interact with the Rust EVM implementation [EVM pallet](https://github.com/paritytech/frontier/tree/master/frame/evm)

• Native Ethereum RPC support (Web3) in Substrate [Frontier RPC](https://github.com/paritytech/frontier). This provides compatibility with Ethereum developer tools such as MetaMask, Truffle, and Remix

• Event subscription support (pub/sub), which is a missing component on the Web3 RPC side and commonly used by dApp developers. You can find a tutorial on how to subscribe to events [here](https://docs.moonbeam.network/integrations/pubsub)

• Upport for the following precompile contracts: ecrecover, sha256, ripemd160 and the identity function (or datacopy)

• Unification of Substrate and Ethereum accounts under the H160 format, an effort we are calling Unified Accounts. Consequently, there will be only one kind of account in the system represented by a single address

• And many more.

## Get Started

> HTTPS DNS

### To connect to Moonbase Alpha via HTTPS, simply point your provider to the following RPC DNS:

\`\`\` js
https://rpc.testnet.moonbeam.network
\`\`\`

For the web3.js library, you can create a local Web3 instance and set the provider to connect to Moonbase Alpha (both HTTP and WS are supported):

\`\`\` js
const Web3 = require('web3'); //Load Web3 library
.
.
.
//Create local Web3 instance - set Moonbase Alpha as provider
const web3 = new Web3('https://rpc.testnet.moonbeam.network'); 
\`\`\`


For the ethers.js library, define the provider by using ethers.providers.JsonRpcProvider(providerURL) and setting the provider URL to Moonbase Alpha:

\`\`\` js
const ethers = require('ethers');

const providerURL = 'https://rpc.testnet.moonbeam.network';
\`\`\`


Define Provider

\`\`\` js
let provider = new ethers.providers.JsonRpcProvider(providerURL);
\`\`\`


• Any Ethereum wallet should be able to generate a valid address for Moonbeam (for example, [MetaMask](https://metamask.io/)).

`;

export default markdownPolkadot.trim();