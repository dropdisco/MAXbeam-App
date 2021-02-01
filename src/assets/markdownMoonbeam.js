const markdownMoonbeam = `
## Polkadot-js Extension Release Update

Polkadot-js extension is a browser extension available for Firefox and Chrome dedicated to managing accounts for Substrate-based chains, including Polkadot and Kusama. The past months have been rich in enhancements and new features for the browser extension, which recently released v0.36.

### Why should you use an extension in the first place?

Browser extensions are very powerful tools. They can read any website you visit, read your cookies, read what you type, and basically do anything you would do on a website. Because of this, installing a browser extension should never be taken lightly. However, given certain precautions, extensions can also be very useful and can enhance your security.
Polkadot-js extension focuses on one thing: managing your accounts. You can add, import, and export accounts, and sign transactions or extrinsics that you have initiated from websites you have authorized. Having your accounts stored in a browser extension allows you to bring your identity with you on any website you visit and have granted access to your account. The attack surface on a browser extension is very narrow compared to websites, making it a better place to store your accounts. Still, we recommend only storing private keys of accounts with a low amount of funds in the extension. The best practice remains to use an offline wallet to store the majority of your funds. The extension also supports linking externa [ Parity Signer](https://www.parity.io/signer/) accounts.

One of the biggest threats would be to install a malicious extension. It’s extremely important to make sure you install the official extension and not a clone that could appear on your browser’s store. Only follow links from the [GitHub repository](https://github.com/polkadot-js/extension) or the official [Polkadot-js website](https://polkadot.js.org/extension/). Do not reach the store’s page from a search engine or any link that you would not trust. Also good to know, the Chrome extension cannot be found by searching the store. You will only be able to access it using a direct link. The Polkadot-js extension is open source, so you can also build it yourself, but in this case remember that you will need to update it manually.
The Polkadot-js extension is very opinionated in terms of user privacy. It contains no tracker, no analytics tool, and no way for its developers to track you.


### New Polkadot-js enhancements and features
- [x]   Internationalization

You can now set up the extension in your favorite language. At the time of writing, your favorite language should be one of English, French or Chinese though! Want the extension available in more languages? You can help us make this list longer! The process is fairly easy and doesn’t require any technical knowledge. Find out how to do it in the [extension’s FAQ](https://polkadot.js.org/docs/extension/FAQ/#how-to-help-with-the-translation-of-the-extensions-interface). Any contribution is greatly appreciated.

![meta](https://miro.medium.com/max/279/1*Ay-VVzfsE_dQu5Qsnq3bpw.png)  


### Phishing website detection
As the popularity of Polkadot grows, so does the interest of scammers and malicious actors. The Polkadot-js extension has now the ability to detect malicious websites from a curated list. It will redirect you to an information page, letting you know that this website has been considered malicious and that you should not trust it. A dedicated repository has been created to manage the list of flagged websites.
Yet again, your participation in keeping this list up to date is essential. Have a look at the extension’s FAQ to learn how to add a new malicious website. No technical knowledge required :)

#### Remember my password for 15min
The extension will now let you remember your password for 15 minutes. This feature is particularly useful for Dapps that need several signatures in a short time frame, or if you know that you will need to sign several transactions with the same account in the next 15min. You will still get prompted and be able to read the content of what needs to be signed, but the password will not be needed if the “remember password” checkbox was ticked previously. Additionally, you can extend this 15min period each time you perform a signature with the extension.
`;
export default markdownMoonbeam.trim();