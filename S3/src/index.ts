import express from 'express';
import bodyParser from 'body-parser'
import env from 'dotenv'
import aws from 'aws-sdk'
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const app = express()

app.use(bodyParser.json())
app.use(express.json())
env.config()

const s3 = new aws.S3();

    (async () => {
        await s3.putObject({
            Body: "helow world",
            Bucket: "sample-bucket",
            Key: "text.txt"
        }).promise()
    })

app.listen(3000, () => {
    console.log("Server Ronning 3000");

})