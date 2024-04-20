import mongoose from "mongoose";

const singleScoreSchema = new mongoose.Schema(
  {
    Processor: String,
    Details: String,
    Score: String,
  },
  { collection: "single_score" }
);

const SingleScore = mongoose.model("SingleScore", singleScoreSchema);

export default SingleScore;
