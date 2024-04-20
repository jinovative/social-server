import mongoose from "mongoose";

const multiScoreSchema = new mongoose.Schema(
  {
    Processor: String,
    Details: String,
    Score: String,
  },
  { collection: "multi_score" }
);

const MultiScore = mongoose.model("MultiScore", multiScoreSchema);

export default MultiScore;
