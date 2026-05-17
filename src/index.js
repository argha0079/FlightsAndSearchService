import express from "express"
import { PORT } from "./config/envConfig.js"
const setupAndStartServer = async () => {

    //create the server
    const app = express();
    // const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer(); 