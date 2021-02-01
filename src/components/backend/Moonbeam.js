import { ethers } from 'ethers';

const providerURL = 'http://localhost:9933';
const privKey = '0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const chainID = 1281;
const provider = new ethers.providers.JsonRpcProvider(providerURL, chainID);
export const sendTo = "0x2f318C334780961FB129D2a6c30D0763d9a5C970";
export const thisAmmount = '0.5';
export const thisNoAmmount = '0.05';
export const gasMax = 12345;
export const gasPrices = 12345678900;
export const wallet = new ethers.Wallet(privKey, provider);
export const txHasAddress = "https://expedition.dev/tx/";
export const WsProvider = "?rpcUrl=http://127.0.0.1:9933";