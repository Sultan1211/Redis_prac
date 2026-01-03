import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();
client.connect()
const port = 3000;
app.use(express.json())
app.post("/submit", async(req,res)=>{
    const {name, age, gender} = req.body;
    await client.lPush("user:1",JSON.stringify({name,age,gender}))
    res.json({
        msg:"Submitted successfully"
    })
})

app.listen(port);