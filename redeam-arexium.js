// 🔥 This is not a script. It’s a throne activation.
// Executes the redeem() function on Arxium – Leader of DAO NFT

require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contractAddress = "0x57664ea40e95636ed7a4df35f4b31e3656a851cd"; // Arxium – Leader of DAO
  const abi = [
    {
      "inputs": [],
      "name": "redeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  console.log("🧙 Initiating ritual: redeem Leader NFT...");
  const tx = await contract.redeem();
  console.log("⛓️ Transaction sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Ritual complete. Block:", receipt.blockNumber);
}

main().catch((error) => {
  console.error("❌ Ritual failed:", error);
});
