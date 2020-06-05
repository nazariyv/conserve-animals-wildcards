const Web3 = require("web3");
const Box = require("3box");

// const web3 = new Web3(
//   Web3.givenProvider || process.env.REACT_APP_INFURA_RINKEBY_WS
// );

// you first create a 3box space for wildcards
const createSpace = async () => {
  const provider = new Web3.providers.WebsocketProvider(
    process.env.REACT_APP_INFURA_RINKEBY_WS
  );
  //   const provider = await Box.get3idConnectProvider();
  const box = await Box.create(provider);
  //   console.log(process.env.REACT_APP_INFURA_RINKEBY_WS);
  //   Box.openBox(
  //     "0xd93800b7290b37a3ac36e4cdd3f881a929acd4a3", // todo: my hardcoded address. this will be the admin's address with which you need to create the 3box threads
  //     new Web3.providers.WebsocketProvider(
  //       process.env.REACT_APP_INFURA_RINKEBY_WS
  //     )
  //   )
  // .then((box) => {
  //   console.log("opened box");
  //   box
  //     .openSpace("wildcards")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  const space = await box.openSpace("wildcards");
  console.log(space);
};

const createPublicThres = () => {
  Box.space
    .joinThread("GorillaVitalik", {
      firstModerator: process.env.REACT_APP_ADMIN,
      members: true,
    })
    .then((thread) => {
      console.log(thread);
    })
    .catch((err) => {
      console.log(err);
    });
  //   console.log(thread);
  //   return thread;
};

createSpace();
// createPublicThres();
