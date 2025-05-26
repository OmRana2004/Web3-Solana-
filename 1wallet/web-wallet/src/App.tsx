import { useState } from "react";
import { Wallet } from "ethers";
import * as bip39 from "bip39";
import { BIP32Factory } from "bip32";
import { Buffer } from "buffer";
import * as ecc from "tiny-secp256k1"; // ✅ Ensure correct import

// Initialize BIP32 with tiny-secp256k1
const bip32 = BIP32Factory(ecc);

window.Buffer = Buffer; // ✅ Polyfill Buffer for Vite

const App: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<string | null>(null);
  const [wallets, setWallets] = useState<string[]>([]);

  const generateMnemonic = () => {
    const newMnemonic = bip39.generateMnemonic();
    setMnemonic(newMnemonic);
    setWallets([]); // Reset wallets
  };

  const generateWallet = () => {
    if (!mnemonic) {
      alert("Please generate a mnemonic first.");
      return;
    }

    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed);
    const childNode = root.derivePath("m/44'/60'/0'/0/0");
    const wallet = new Wallet(childNode.privateKey);

    setWallets([...wallets, wallet.address]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Web Wallet</h2>
      <button onClick={generateMnemonic}>Generate Mnemonic</button>
      {mnemonic && <p><strong>Mnemonic:</strong> {mnemonic}</p>}
      <button onClick={generateWallet} disabled={!mnemonic}>
        Add Wallet
      </button>
      <h3>Wallets</h3>
      <ul>
        {wallets.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
