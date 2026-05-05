import express from "express";
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

// Xử lý dữ liệu JSON từ request body
app.use(express.json());

// CẤU HÌNH CORS (Sửa lỗi "Không thể kết nối đến máy chủ")
// Cho phép cả cổng 3000 (React cũ) và 5173 (Vite) truy cập vào API
app.use(cors({ 
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// --- ROUTES ---

// Các route chính cho bóng đá (Live, Today, v.v.)
app.use("/api/football", footballRoutes);

// Phục vụ các file tĩnh (nếu cần thiết cho việc deploy)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API đang chạy ổn định...");
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