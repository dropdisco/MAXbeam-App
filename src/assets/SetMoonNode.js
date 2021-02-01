const markNode = `
## Setting Up a Moonbeam Node and Connecting to the Polkadot JS GUI

[![Everything Is AWESOME](https://yt-embed.herokuapp.com/embed?v=p_0OAHSlHNM)](https://www.youtube.com/watch?v=p_0OAHSlHNM&feature=emb_title)


### Introduction

#### This guide outlines steps to create a standalone local node for testing the Ethereum compatibility functionality of Moonbeam

> This tutorial was created using the tutorial-v3 tag of Moonbase Alpha. The Moonbeam platform, and the Frontier components it relies on for Substrate-based Ethereum compatibility, are still under very active development. The examples in this guide assume an Ubuntu 18.04-based environment and will need to be adapted accordingly for MacOS or Windows.

### Installation and Setup

#### We start by cloning a specific tag of the Moonbeam repo that you can find here:
#### https://github.com/PureStake/moonbeam/

\`\`\`js
git clone -b tutorial-v3 https://github.com/PureStake/moonbeam
cd moonbeam
\`\`\`

Next, install Substrate and all its prerequisites (including Rust), by executing:

\`\`\`js
curl https://getsubstrate.io -sSf | bash -s -- --fast
\`\`\`

Now, lets make some checks (correct version of Rust nigthly) with the initialization script:


\`\`\`js
./scripts/init.sh
\`\`\`

Once you have followed all of the procedures above, it's time to build the standalone node by running:

\`\`\`js
cd ./node/standalone
cargo build --release
\`\`\`

If a cargo not found error shows up in the terminal, manually add Rust to your system path (or restart your system):

\`\`\`js
source $HOME/.cargo/env
\`\`\`


> Here is what the tail end of the build output should look like:

![Alt text][id]

Then you will want to run the node in dev mode using the following command:

[id]: https://docs.moonbeam.network/images/setting-up-a-node/setting-up-node-2b.png  "Moonbeam Node"

\`\`\`js
./target/release/moonbase-standalone --dev
\`\`\`

#### You should see an output that looks like the following, showing that blocks are being produced:

![Alt text][id]

Then you will want to run the node in dev mode using the following command:

[id]: https://docs.moonbeam.network/images/setting-up-a-node/setting-up-node-3b.png  "Moonbeam Node 2"



[Completed Tutorial here](https://docs.moonbeam.network/getting-started/local-node/setting-up-a-node/)

`;
export default markNode.trim();