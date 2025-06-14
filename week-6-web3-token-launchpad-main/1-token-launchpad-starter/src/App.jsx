import "./App.css";
import { TokenLaunchpad } from "./components/TokenLaunchpad";
// wallet adapter imports
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";


function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>


 <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                 <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
          <TokenLaunchpad></TokenLaunchpad>


          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
// This is a simple React application that uses the Solana wallet adapter to connect to the Solana blockchain. It includes a token launchpad component and provides wallet connection and disconnection functionality through buttons. The application is styled with basic CSS and uses the Solana Devnet endpoint for blockchain interactions.
// The main App component wraps the TokenLaunchpad in a ConnectionProvider and WalletProvider, allowing users to connect their wallets and interact with the Solana blockchain.
// The WalletMultiButton and WalletDisconnectButton components provide UI elements for users to connect and disconnect their wallets, respectively. The application is designed to be simple and user-friendly, making it easy for users to launch tokens on the Solana blockchain.   