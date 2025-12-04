import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";
import authRoutes from './routes/auth.routes.ts'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Server ishlamoqda...")
});

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

connectDB().then(() => {
    console.log("MongoDB ulandi")
    server.listen(PORT, () => {
        console.log("Ish boshlandi", PORT)
    })
}).catch((error) => {
    console.log("Mongoga ulanishda muammo yuz berdi", error)
})
