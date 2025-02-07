import express, { Express } from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config({ path: './.env.local' })

const app: Express = express()
const port = process.env.PORT || 3001

app.use(express.json())

const mongoURI = process.env.MONGO_URI

mongoose
    .connect(`${mongoURI}`)
    .then(() => console.log("CONNECTED TO MONGODB"))
    .catch((err) => console.error("Failed to Connect", err))

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})