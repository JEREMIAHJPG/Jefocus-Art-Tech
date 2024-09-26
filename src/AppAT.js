import express from "express";
import dotenv from "dontenv";
import smsRoute from "../server";
import bodyParser from "body-parser";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`running on localhost:${PORT}`));

app.use(bodyParser.json())

app.use("/", smsRoute);

//axios.get('https://api.africastalking.com', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // });