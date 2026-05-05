// src/routes/footballRoutes.js

import express from "express";
import {
    getLiveMatches,
    getTodayMatches
} from "../controllers/footballController.js";

const router = express.Router();

// 🔴 API: trận đang diễn ra
router.get("/live", getLiveMatches);

// 📅 API: trận hôm nay
router.get("/today", getTodayMatches);

export default router;