import express from "express";
import SubTaskController from "../controllers/subtasksController.js";

const router = express.Router();

router
  .get("/subtasks", SubTaskController.listSubTasks)
  .get("/subtasks/:id", SubTaskController.listSubTaskById)
  .post("/subtasks", SubTaskController.createSubTask)
  .put("/subtasks/:id", SubTaskController.updateSubTask)
  .delete("/subtasks/:id", SubTaskController.deleteSubTask)

export default router;   