import express from "express";
import UserScoreController from "../controllers/userScoresController.js";

const router = express.Router();

router
  .get("/userScores", UserScoreController.listUserScores)
  .get("/userScores/:id", UserScoreController.listUserScoreById)
  .post("/userScores", UserScoreController.createUserScore)
  .put("/userScores/:id", UserScoreController.updateUserScore)
  .delete("/userScores/:id", UserScoreController.deleteUserScore)
  .post("/userScores-createOrUpdate", UserScoreController.createOrUpdateUser)

export default router;   