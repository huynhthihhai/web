import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import footballRoutes from "./routes/footballRoutes.js";
import { connectDB } from "./config/db.js";

// Cấu hình biến môi trường
dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express();

// --- MIDDLEWARES ---

mongoose.set('strictQuery', true);

// Xử lý dữ liệu JSON từ request body
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}));``

// --- ROUTES ---

// Các route chính cho bóng đá (Live, Today, v.v.)
app.use("/api/football", footballRoutes);

// Phục vụ các file tĩnh (nếu cần thiết cho việc deploy)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
// --- KẾT NỐI DB VÀ CHẠY SERVER ---

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng: ${PORT}`);
    console.log(`API Live: http://localhost:${PORT}/api/football/live`);
  });
}).catch((err) => {
  console.error("Lỗi kết nối cơ sở dữ liệu:", err.message);
  process.exit(1);
});