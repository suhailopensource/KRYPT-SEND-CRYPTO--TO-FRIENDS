// https://eth-sepolia.g.alchemy.com/v2/qHeKMqIiTadUS9_A2MxUcOMY2aMQC3mD

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/qHeKMqIiTadUS9_A2MxUcOMY2aMQC3mD",
      accounts: [
        "0db0985f070eda3caf2d004912668149c11b2f91b58a49f08c48ee198af21f68",
      ],
    },
  },
};
