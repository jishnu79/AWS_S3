import express from 'express';
import bodyParser from 'body-parser'
const router = require('./Routes/PostRoute')

const app = express()

app.use(bodyParser.json())
app.use(express.json())

app.use('/',router)

app.listen(3000, () => {
    console.log("Server Ronning 3000");

})