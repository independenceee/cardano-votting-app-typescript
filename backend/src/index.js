import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(express.json());



router(app);
const PORT = process.env.PORT || 5000;
const start = async function() {
    try {
        app.listen(PORT,  function() {
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

;(()=> {
    start();
})()