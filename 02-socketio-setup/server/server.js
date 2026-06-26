import express from 'express'
import {createServer} from 'http'
import { Server } from 'socket.io'

const app = express()
const PORT = 5000

const server = createServer(app)
const io = new Server(server)

app.listen(PORT , ()=>{
    console.log("connected to server")
})