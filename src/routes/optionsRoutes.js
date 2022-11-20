import express from "express";
import OptionController from "../controllers/optionsController.js";

const router = express.Router();

router
  .get("/options", OptionController.listOptions)
  .get("/options/:id", OptionController.listOptionById)
  .post("/options", OptionController.createOption)
  .put("/options/:id", OptionController.updateOption)
  .delete("/options/:id", OptionController.deleteOption)

export default router;   