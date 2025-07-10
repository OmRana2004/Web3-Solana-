import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance} from "wagmi"
import { mainnet } from "wagmi/chains"
import { injected } from "wagmi/connectors"

const queryClient = new QueryClient()

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnector />
        <EthSend />
        <MyAddress />
      </QueryClientProvider>
      </WagmiProvider>
  )
}

function MyAddress() {
  const { address } = useAccount()
  const balance = useBalance({ address })

  return(
    <div>
      {address}
      {balance?.data?.value}
    </div>

  )
}

function WalletConnector() {
  const { connectors, connect } = useConnect()
  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

  function EthSend() {

    return <div>
      <input type="text" placeholder="Address..."></input>
      <button>Send 0.1 ETH</button>
    </div>
}

export default App
