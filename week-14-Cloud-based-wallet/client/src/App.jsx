import axios from "axios"
import "./App.css"
import {Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL} from "@solana/web3.js"

const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/9RyxbDqU26Qcey-bCPUVB")
const fromPubkey =  new PublicKey("7acexS4Asdvum7prJ6m7DKmYFRtDHQjkVSywtMfs7AFn")
export default function App() {

  async function sendSol() {
    const ix = SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: new PublicKey ("JDx7VT6GCnJtEiV51f7fPMHHvoqcVeXPjYWF6zYnWrLU"),
      lamports: 0.01 * LAMPORTS_PER_SOL
    })
    const tx = new Transaction().add(ix);

    const { blockhash } = await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash
    tx.feePayer = fromPubkey
    
    // convert the transaction to a bunch of bytes
    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    })

    console.log(serializedTx);

    await axios.post("/api/v1/txn/signin", {
      message: serializedTx,
      retry: false
    })

  }

  return (
    <div>
      <input type="text"placeholder="Ammount"></input>
      <input type="text"placeholder="Address"></input>
      <button onClick={sendSol}>Submit</button>
    </div>
  )
}
