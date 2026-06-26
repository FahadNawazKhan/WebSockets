import express from 'express'
import cors from 'cors'

const server = express()
const PORT = 5000

server.use(cors())

server.get("/api/ping", (req, res) => {
    console.log("Request received");

    res.json({
        message: "Ping from server",
    });
});

server.listen(PORT, () => {
    console.log('server is running at PORT:', PORT)
})

