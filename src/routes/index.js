import express from "express";
import options from "./optionsRoutes.js"
import subtasks from "./subtasksRoutes.js"
import questions from "./questionsRoutes.js"
import tasks from "./tasksRoutes.js"
import users from "./usersRoutes.js"
import userscores from "./userScoresRoutes.js"

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    userscores,
    users,
    options,
    questions,
    subtasks,
    tasks
  )
}

export default routes