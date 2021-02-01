import markdownFeatureSrc from '../assets/markdown-test-file';
import markdownFeature from '../assets/markdown-cheatsheet';
import markdownMoonbeam from '../assets/markdownMoonbeam';
import markPolka from '../assets/markPolkadot';
import markStarter from '../assets/markStarter';
import markMoonNode from '../assets/SetMoonNode';

let data = [
  {
    id: '0',
    title: 'Full Feature Example',
    author: 'Adinda Ratnawati',
    excerpt: 'This is the full feature example. You can see all markdown feature supported and experience all features in Write Down with this example. Have fun!!',
    cover: {
      url: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMzU5fQ',
      authorName: 'Adinda Ratnawati Ridwan',
      authorLink: 'https://unsplash.com/@jonathan_christian_photography'
    },
    tags: ['example', "code", 'markdown cheatset'],
    markdown: markdownFeatureSrc,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-01-17T08:16:01.296Z',
    updatedAt: '2020-01-06T18:16:01.296Z',
  },
  {
    id: '1',
    title: 'Polkadot JS Exstension',
    author: 'Agin DropDisco',
    excerpt:'Browser extensions are very powerful tools. They can read any website you visit, read your cookies, read what you type, and basically do anything you would do on a website. Because of this, installing a browser extension should never be taken lightly. However, given certain precautions, extensions can also be very useful and can enhance your security. Polkadot-js extension focuses on one thing: managing your accounts.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*FRi0y3OAN1iWY0SM3RRu-w.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markdownMoonbeam,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
  {
    id: '2',
    title: 'Moonbase Alpha, The Moonbeam TestNet',
    author: 'burgerking12',
    excerpt: 'The first Moonbeam TestNet, named Moonbase Alpha, aims to provide developers with a place to start experimenting and building on Moonbeam in a shared environment. Since Moonbeam will be deployed as a parachain on Kusama and Polkadot, we want our TestNet to reflect our production configuration. For this reason, we decided that it needed to be a parachain-based configuration rather than a Substrate standalone setup.',
    cover:{
      url: 'https://moonbeam.network/wp-content/uploads/2020/10/futuristic-urban-cityscape-moonbeam-2.png',
      authorName: 'burgerking12 AKA Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Moonbeam"],
    markdown: markPolka,
    isPublished: true,
    postedAt: '2020-12-16T18:16:01.296Z',
    updatedAt: '2020-12-17T18:16:01.296Z',
  },
  {
    id: '3',
    title: 'Setting Up a Moonbeam Node and Connecting to the Polkadot JS GUI',
    author: 'Adinda Ratnawati',
    excerpt: 'This tutorial was created using the tutorial-v3 tag of Moonbase Alpha. The Moonbeam platform, and the Frontier components it relies on for Substrate-based Ethereum compatibility, are still under very active development. The examples in this guide assume an Ubuntu 18.04-based environment and will need to be adapted accordingly for MacOS or Windows.',
    cover:{
      url: 'https://pbs.twimg.com/media/EWn0lVZXkAUx6hb.jpg',
      authorName: 'Adinda Ratnawati',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Moonbeam"],
    markdown:  markMoonNode,
    isPublished: true,
    postedAt: '2020-08-15T18:16:01.296Z',
    updatedAt: '2020-08-21T18:16:01.296Z',
  },
  {
    id: '4',
    title: 'Moonbeam, A Smart Contract Platform For The Polkadot Network',
    author: 'Adinda RR',
    excerpt: 'Moonbeam smart contracts make it much easier and cheaper to build decentralized finance applications which helps developers globally solve real-world finance problems using Web 3.0 technologies.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*OoYQjaDz_B9n7rJd7u0nOQ.png',
      authorName: 'Rye Jessen',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Moonbeam"],
    markdown: '## Conten Title',
    isPublished: true,
    postedAt: '2020-08-15T18:16:01.296Z',
    updatedAt: '2020-08-21T18:16:01.296Z',
  },
  {
    id: '5',
    title: 'Who is Building on Moonbeam',
    author: 'Burgerking12',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. At tellus at urna condimentum mattis pellentesque. Volutpat est velit egestas dui id ornare arcu odio ut. Purus viverra accumsan in nisl nisi.',
    cover:{
      url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
      authorName: 'Rye Jessen',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Moonbeam"],
    markdown: '## This is content No.4',
    isPublished: true,
    postedAt: '2020-08-15T18:16:01.296Z',
    updatedAt: '2020-08-21T18:16:01.296Z',
  },
  {
    id: '6',
    title: 'Polkadot JS Exstension part 2',
    author: 'Agin DropDisco',
    excerpt:'Browser extensions are very powerful tools. They can read any website you visit, read your cookies, read what you type, and basically do anything you would do on a website. ',
    cover:{
      url: 'https://miro.medium.com/max/700/1*I7BJ0p8l_iFIVM_KrnP5Yw@2x.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markdownMoonbeam,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
  {
    id: '7',
    title: 'Polkastarter Partners with Moonbeam for Cross-Chain Interoperability',
    author: 'Agin DropDisco',
    excerpt:'Polkastarter is thrilled to announce that we are partnering with Moonbeam, an Ethereum compatible parachain that allows for easy integration between the Ethereum and Polkadot ecosystems.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*9YY6LRbKWX9mDXJcmEtM2A.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markStarter,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
  {
    id: '8',
    title: 'Markdown File Test',
    author: 'Agin DropDisco',
    excerpt:'Cheatshe how to create blog using markdown syntax || you will learn alot on this sections',
    cover:{
      url: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDEzNjR8MHwxfHNlYXJjaHwyfHxidWlsZHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Github', 'Syntax', "Markdown"],
    markdown: markdownFeature,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
];
export default data;

////////////////////////////////////////////////////////////
// FUTURE
////////////////////////////////////////////////////////////
// STORE THIS WITH FAKE API, JSON, json-server and low-db