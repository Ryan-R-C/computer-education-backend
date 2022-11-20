import mongoose from "mongoose";

const UserScoreSchema = new mongoose.Schema(
  {
    id: {type: String},
    hits: {type: Number   , default: 0},
    misses: {type: Number , default: 0},
    user: {
      type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    task: {
      type: mongoose.Schema.Types.ObjectId, ref: 'tasks', required: true
    },
    level: {type: Number , default: 0},
  }
);

const userScore = mongoose.model('userScore', UserScoreSchema);


export default userScore;
