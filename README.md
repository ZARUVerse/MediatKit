# 🗝️ Redeem in ZARUverse

Redeem is not a refund. It’s a ritual.

In ZARUverse, certain NFTs are forged with embedded utility—keys to unlock relics, lore, or DAO access. The `redeem()` function allows holders to activate that embedded power.

---

## 🔥 What Can Be Redeemed?

### 🔹 Genesis Flame NFT  
- **Contract Address:** `0x57664ea40e95636ed7a4df35f4b31e3656a851cd`  
- **Utility:** Unlock lore, DAO entry, future staking  
- **Redeem Method:** `redeem()` callable via dApp or APK

### 🔹 Arxium – Leader of DAO NFT  
- **Contract Address:** `0x9aF3bC1eA7e4fD2cB3cD1FfA6eC1A2bE4E7D9aC1` *(مثال)*  
- **Utility:** DAO leadership, relic access, governance boost  
- **Redeem Method:** `redeem()` triggers DAO privileges

---


## 🧪 Technical Flow

Redeem is executed via smart contract on BNB Smart Chain:

```solidity
function redeem() external nonpayable
- Requires wallet connection (MetaMask or compatible)  
- Must be on BNB Chain (chainId: 56)  
- Gas fees apply  
- Can be triggered via dApp or APK

---

🧙‍♂️ Ritual UX (User Experience)

1. Connect wallet  
2. Switch to BNB Chain  
3. Click “Redeem Flame”  
4. Confirm transaction  
5. Receive lore unlock or DAO access

---

📲 Redeem via App

ZARUverse APK includes in-app redeem portal:  
Download APK

---

🛡️ Notes

- Redeem is irreversible  
- Each NFT can be redeemed once  
- Some NFTs may unlock future relics or staking rights

---

🧠 Developer Reference

🔹 ABI Excerpt

`json
[
  {
    "inputs": [],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
`

Use ethers.js or web3.js to interact.  
See redeem-flame.js in /media-kit/scripts/ for example.

---

🪙 Related Token Contracts

🔸 ZARU Token
- Symbol: ZARU  
- Contract Address: 0xdac6f0ec5901b3877dc6db23c3882267ba9fabf6  
- Utility: Lore unlocks, staking, DAO voting  
- ZARU Token Contract on GitHub

🔸 MAK1 Token
- Symbol: MAK1  
- Contract Address: 0x... (در صورت نهایی شدن)  
- Utility: Infrastructure deployment, protocol-level governance

🔸 DMD Token
- Symbol: DMD  
- Contract Address: 0x... (در صورت نهایی شدن)  
- Utility: Stable payments, collateral, treasury-backed staking

---

🔗 Related Links

- Drop Portal  
- Genesis NFT on BscScan  
- ZARU Token Contract Repo  
- Media Kit Home

---

> “The Flame is not claimed. It is summoned.”

© 2025 Makese | ZARUverse – Mythic Infrastructure for Viral Ecosystems
