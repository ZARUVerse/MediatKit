// 🔥 This is not a script. It’s a supply invocation.
// Mints ZARU tokens to a specified wallet using Hardhat + ethers.js

require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contractAddress = "0xdac6f0ec5901b3877dc6db23c3882267ba9fabf6"; // ZARU Token
  const abi = [
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const recipient = "0xYourWalletAddress"; // ← Replace with actual recipient
  const amount = ethers.utils.parseUnits("100000", 18); // ← 100,000 ZARU

  console.log(`🧙 Minting ${ethers.utils.formatUnits(amount, 18)} ZARU to ${recipient}...`);
  const tx = await contract.mint(recipient, amount);
  console.log("⛓️ Transaction sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Mint complete. Block:", receipt.blockNumber);
}

main().catch((error) => {
  console.error("❌ Mint failed:", error);
});
