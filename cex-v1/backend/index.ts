import express from "express";
import { use } from "react";

const app = express(); 

app.use(express.json());

const USERS: { username: string, password: string}[]=[]

app.post("/signup", async (req, res) => {
    const { username, password} = req.body;

    if (!username || !password) {
        res.send("all fildes are require")
    }

 USERS.push({username, password});
    res.status(201).send("user creader successfully")
});

app.post("/login", (req, res) => {
    const {username, password} = req.body

    const user = USERS.find(
        user =>
             user.username === username && user.password === password
    );
    if (!user) {
        return res.status(401).send("User not found")
    }
    return res.status(200).send("login successfully")
})

app.listen(3000, () => {
    console.log("listining on port 3000")
})