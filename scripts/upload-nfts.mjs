import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "optimism-goerli", {
    clientId: "cc9ff2e1fb69e17286d3c6786395884c",
    secretKey: "0XVDCOkRPaWGDEMSH4ihkHUsRoefmDFSy3iXwrh6amEofRKLowvEeWiYS_Mvql7cQs3QRYGrNdDz3bzCWBhc3Q",
});

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0xaeF26Ac15B1C54Df0493782d62f0316e94E9fC88",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/megodseth/nft-test/nfts/0",
      "https://my-json-server.typicode.com/megodseth/nft-test/nfts/1",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
