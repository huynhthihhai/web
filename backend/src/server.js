import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { fileURLToPath } from "url";

// routes
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import footballRoutes from "./routes/footballRoutes.js";

// middleware
import { protectedRoute } from "./middlewares/authMiddleware.js";

// db
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// fix __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =====================
// 🔥 MIDDLEWARE CHUẨN
// =====================

// CORS (DUY NHẤT 1 LẦN)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

// parse JSON
app.use(express.json());

// cookies
app.use(cookieParser());

// =====================
// 🔐 PUBLIC ROUTES
// =====================
app.use("/api/auth", authRoute);

// =====================
// 🔒 PROTECTED ROUTES
// =====================
app.use("/api/users", protectedRoute, userRoute);

// =====================
// ⚽ FOOTBALL ROUTES
// =====================
// (tuỳ bạn: có thể để public hoặc protect)
app.use("/api/football", footballRoutes);

// =====================
// 📦 STATIC FRONTEND (PRODUCTION)
// =====================
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// =====================
// 🚀 START SERVER
// =====================
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server chạy tại: http://localhost:${PORT}`);
      console.log(`Football API: http://localhost:${PORT}/api/football/live`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  });