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
// The TokenLaunchpad component is where the main functionality of launching tokens will be implemented. It is expected to handle the logic for creating and managing token launches, including user interactions and blockchain transactions.
// The application is structured to be modular, allowing for easy expansion and customization in the future. Developers can add more features or modify existing ones without affecting the overall architecture of the application.
// The use of the ConnectionProvider and WalletProvider ensures that the application can communicate with the Solana blockchain and manage wallet connections effectively. The WalletModalProvider provides a modal interface for users to select and connect their wallets, enhancing the user experience.
