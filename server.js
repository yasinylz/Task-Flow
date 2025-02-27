import express from "express"
import dotenv from "dotenv"
import cros from "cors"


dotenv.config();
const app=express();
import index from "./src/routes/index.js"
import dbConnect from "./config/db.js"
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",index)
dbConnect();
app.use(cros())

app.listen(5000,()=>{console.log("listening")})