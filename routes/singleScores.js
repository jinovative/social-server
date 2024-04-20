import express from "express";
import SingleScore from "../models/SingleScore.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const scores = await SingleScore.find();
    res.json(scores);
  } catch (err) {
    console.error("Error fetching single scores:", err);
    res.status(500).json({
      message: "Error fetching data from database",
      error: err.message,
    });
  }
});

export default router;
