import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multiScoresRouter from "./routes/multiScores.js";
import singleScoresRouter from "./routes/singleScores.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/multi_scores", multiScoresRouter);
app.use("/api/single_scores", singleScoresRouter);

app.get("/api/single_scores", async (req, res) => {
  try {
    const { processor } = req.query;
    const scores = await SingleScore.find({
      Processor: { $regex: new RegExp(processor, "i") }, // Case-insensitive search
    });
    if (scores.length > 0) {
      res.json(scores);
    } else {
      res
        .status(404)
        .json({ message: "No single scores found for the given processor." });
    }
  } catch (error) {
    console.error("Search error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
