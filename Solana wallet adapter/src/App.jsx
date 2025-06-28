import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletMultiButton,
  WalletDisconnectButton,
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

// Airdrop
function App() {
  // create your own rpc url? Alchemy

  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/AFNVghkE5EQ9V81lPVKu9toyvCOnQw5S"}>
          <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
   <WalletMultiButton> </WalletMultiButton>
                <WalletDisconnectButton />
                
                <div>
                  
                </div>
                <Airdrop />
               
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App
// c o d e
