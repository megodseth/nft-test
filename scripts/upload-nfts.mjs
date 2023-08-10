import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "optimism-goerli", {
    clientId: "cc9ff2e1fb69e17286d3c6786395884c",
    secretKey: "0XVDCOkRPaWGDEMSH4ihkHUsRoefmDFSy3iXwrh6amEofRKLowvEeWiYS_Mvql7cQs3QRYGrNdDz3bzCWBhc3Q",
});

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0x3731E75d0074D49B114262f55C92409Ec77c1C48",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/megodseth/nft-test/nfts/0",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/1",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/2",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/3",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/4",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/5",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/6",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/7",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/8",
        "https://my-json-server.typicode.com/megodseth/nft-test/nfts/9",
      "https://my-json-server.typicode.com/megodseth/nft-test/nfts/10",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
