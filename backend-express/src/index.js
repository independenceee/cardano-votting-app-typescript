import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes/index.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

router(app);

const PORT = process.env.PORT || 5000;
const start = async function () {
    app.listen(PORT, function () {
        console.log(`http://localhost:${PORT}`);
    });
};

(function () {
    start();
})();
