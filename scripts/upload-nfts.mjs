import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "optimism-goerli");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0xaeF26Ac15B1C54Df0493782d62f0316e94E9fC88",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/thirdweb-dev/updatable-nft-metadata/nfts/0",
      "https://my-json-server.typicode.com/thirdweb-dev/updatable-nft-metadata/nfts/1",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();