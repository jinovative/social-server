import express from "express";
import MultiScore from "../models/MultiScore.js";

const router = express.Router();

// GET all multi scores
router.get("/", async (req, res) => {
  try {
    const scores = await MultiScore.find();
    res.json(scores);
  } catch (err) {
    console.error("Error fetching multi scores:", err);
    res.status(500).json({
      message: "Error fetching data from database",
      error: err.message,
    });
  }
});

export default router;
