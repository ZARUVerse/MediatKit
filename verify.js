// 🔍 This is not a script. It’s a ritual seal.
// Verifies deployed smart contracts on BscScan using Hardhat

const { run } = require("hardhat");

async function main() {
  const contractAddress = "0xYourContractAddressHere"; // ← Replace with actual deployed address
  const constructorArgs = []; // ← Add constructor args if needed

  try {
    console.log("🔐 Verifying contract on BscScan...");
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: constructorArgs
    });
    console.log("✅ Verification complete.");
  } catch (error) {
    console.error("❌ Verification failed:", error);
  }
}

main();
