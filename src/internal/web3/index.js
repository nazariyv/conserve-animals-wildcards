import Web3 from "web3";

export default new Web3(
  Web3.givenProvider || process.env.REACT_APP_INFURA_RINKEBY_WS
);
