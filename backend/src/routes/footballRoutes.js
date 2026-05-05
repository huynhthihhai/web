// src/routes/footballRoutes.js

import express from "express";
import {
    getLiveMatches,
    getTodayMatches,
    getMatchDetail 
} from "../controllers/footballController.js";

const router = express.Router();

// 🔴 API: trận đang diễn ra
router.get("/live", getLiveMatches);

// 📅 API: trận hôm nay
router.get("/today", getTodayMatches);

//Chi tiet tran dau
router.get("/:id", getMatchDetail);


export default router;