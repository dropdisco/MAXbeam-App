import Unsplash, { toJson }  from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "lDrssggT_R2WGdMWH-nLCchf1rRhmZWSOv2ZIzafgaU",
  secret: "7NqhiD9mUJgSYZpr2doSgOtXDqVW3S2eVkTenUQocN4",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

export {
  unsplash,
  toJson
};
