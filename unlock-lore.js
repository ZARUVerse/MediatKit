// 🔮 This is not a script. It’s a mythic unlock.
// Triggers lore reveal via NFT or DAO-linked module

require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contractAddress = "0xYourLoreModuleAddress"; // ← Replace with actual lore module or NFT contract
  const abi = [
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "unlockLore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tokenId = 1; // ← Replace with actual token ID tied to lore

  console.log(`📜 Unlocking lore for token #${tokenId}...`);
  const tx = await contract.unlockLore(tokenId);
  console.log("⛓️ Transaction sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Lore unlocked. Block:", receipt.blockNumber);
}

main().catch((error) => {
  console.error("❌ Lore unlock failed:", error);
});
