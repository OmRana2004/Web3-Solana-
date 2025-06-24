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

//  https://100x-b-mcdn.akamai.net.in/cohort3/56/b684.ts

//@ts-check   
// hello
//om i should be a good day
// https://100x-b-mcdn.akamai.net.in/cohort3/56/b684.ts
// https://100x-b-mcdn.akamai.net.in/cohort3/56/b684.ts
// https://100x-b-mcdn.akamai