import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173"
}))

const port = 8080;
const hostname = "127.0.0.1";

app.post("/submit", (req, res) => {
    console.log(req.body)
});

app.listen(port, () => {
    console.log("server Started")
})