const express = require("express")
const { userModel } = require("./model")
const { Keypair } = require("@solana/web3.js");
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())
const JWT_SECRET = "123456"
     
app.post("api/v1/signup", async (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    // Validate the inputes using zod, check if the user already exists, has the password

    const Keypair = new Keypair();
    await userModel.create({
        username,
        password,
        publicKey: Keypair.publicKey.toString(),
        privateKey: Keypair.secretKey.toString()
    })
    res.json({
        message: Keypair.publicKey.toString()
    })
})

app.post("api/v1/signin", async (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({
        username: username,
        password: password,
    })

    if (user) {
        const token = jwt.sign({
            id: user
        }, JWT_SECRET)
        res.json({
            token
        })
    } else {

        res.status(403).json({
            message: "Credential are incorrect"
        })
    }
})

app.post("api/v1/txn/sign", (req, res) =>{
    res.json({
        message: "Sign up"
    })
})

app.post("api/v1/txn", (req, res) =>{
    res.json({
        message: "Sign up"
    })
})


app.listen (3000);