// 🔥 This is not a script. It’s a summon.
// Deploys ZARUverse smart contracts to BNB Smart Chain using Hardhat

const { ethers } = require("hardhat");

async function main() {
  console.log("🧙 Summoning contract...");

  // Load contract factory
  const ContractFactory = await ethers.getContractFactory("ZaruToken"); // change to MAK1Token, DMDToken, etc.

  // Deploy with constructor args if needed
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  console.log(`✅ Contract deployed at: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
