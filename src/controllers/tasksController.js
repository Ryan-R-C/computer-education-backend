import mongoose from "mongoose";
import task from "../models/Task.js";
import userScore from "../models/UserScore.js";

class TaskController {

  static subTasksPopulate = {
    path: "subTasks",
    populate: {
      path: 'questions',
      populate: {
        path: 'options',
        model: 'options'
      }
    }
  }

  static listTasks = (req, res) => {
    const query = req.query

    task.find(query)
      .populate(this.subTasksPopulate)
      .exec((err, task) => {
        res.status(200).json(task)
  })
  }

  static listTaskById = (req, res) => {
    const id = req.params.id;

    task.findById(id)
      .populate(this.subTasksPopulate)
      .exec((err, task) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id not not localized.`})
      } else {
        res.status(200).send(task);
      }
    })
  }

  static createTask = (req, res) => {
    let taskController = new task(req.body);

    taskController.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - faild to create task.`})
      } else {
        res.status(201).send(taskController.toJSON())
      }
    })
  }

  static updateTask = (req, res) => {
    const id = req.params.id;

    task.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Task updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteTask = (req, res) => {
    const id = req.params.id;

    task.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Task deleted successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }




  // static listByUserScore = (req, res) => {
  //   const userScoreId = req.params.id

  //   console.log("---------------")
  //   console.log("userScoreId")
  //   console.log(userScoreId)
  //   console.log("---------------")

  //     task.aggregate([{
  //         $lookup: {
  //             from: userScore.collection.name, // collection name in db
  //             localField: "_id",
  //             foreignField: "task",
  //             as: "userScore",
  //         },
  //     },
  //     {
  //       "$match": {
  //         "$or": [
  //           {
  //             "userScore": []
  //           },
  //           {
  //             "userScore.user": mongoose.Types.ObjectId(userScoreId)
  //           },
  //         ]
  //       }
  //     } 
    
  //   ])
  //     .exec((err, task) => {
  //       if(err) {
  //         console.error(err)
  //         res.status(400).send({message: `${err.message} - Id not not localized.`})
  //       } else {
  //         res.status(200).send(task);
  //       }
  //     })


  // }




  static listByUserScore = (req, res) => {
    const userScoreId = req.params.id

    console.log("---------------")
    console.log("userScoreId")
    console.log(userScoreId)
    console.log("---------------")

      task.aggregate([{
          $lookup: {
              from: userScore.collection.name, // collection name in db
              localField: "_id",
              foreignField: "task",
              as: "userScore",
              pipeline: [
                {
                  $match: {
                      user: mongoose.Types.ObjectId(userScoreId)
                  }
                }
              ],
            },
          },
    ])
      .exec((err, task) => {
        if(err) {
          console.error(err)
          res.status(400).send({message: `${err.message} - Id not not localized.`})
        } else {
          res.status(200).send(task);
        }
      })


  }


}

export default TaskController