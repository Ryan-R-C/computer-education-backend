import express from "express";
import QuestionController from "../controllers/questionsController.js";

const router = express.Router();

router
  .get("/questions", QuestionController.listQuestions)
  .get("/questions/:id", QuestionController.listQuestionById)
  .post("/questions", QuestionController.createQuestion)
  .put("/questions/:id", QuestionController.updateQuestion)
  .delete("/questions/:id", QuestionController.deleteQuestion)

export default router;   