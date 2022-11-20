import express from "express";
import TaskController from "../controllers/tasksController.js";

const router = express.Router();

router
  .get("/tasks", TaskController.listTasks)
  .get("/tasks/:id", TaskController.listTaskById)
  .post("/tasks", TaskController.createTask)
  .put("/tasks/:id", TaskController.updateTask)
  .delete("/tasks/:id", TaskController.deleteTask)
  .get("/tasks-score/:id", TaskController.listByUserScore)

export default router;   