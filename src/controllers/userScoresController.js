import userScores from "../models/UserScore.js";

class UserScoreController {

  static listUserScores = (req, res) => {
    const query = req.query

    userScores.find(query)
      .exec((err, userScores) => {
        res.status(200).json(userScores)
  })
  }

  static listUserScoreById = (req, res) => {
    const id = req.params.id;

    userScores.findById(id)
      .exec((err, userScores) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id not not localized.`})
      } else {
        res.status(200).send(userScores);
      }
    })
  }

  static createUserScore = (req, res) => {
    let userScore = new userScores(req.body);

    userScore.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - faild to create userScore.`})
      } else {
        res.status(201).send(userScore.toJSON())
      }
    })
  }

  static updateUserScore = (req, res) => {
    const id = req.params.id;

    userScores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'UserScore updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteUserScore = (req, res) => {
    const id = req.params.id;

    userScores.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'UserScore deleted successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }


  static createOrUpdateUser = (req, res) => {

    const { body } = req

    const { user, task, hits, misses, level} = body
    
    if(body._id) delete body._id;


    userScores.findOneAndUpdate(
      {
        user: user,
        task: task,
      },
      { 
        $set: {
          user,
          task
        },
        $inc: {
          hits, 
          misses, 
          level: 1
          }
      },
      { upsert: true  }, 
      ( (err, value) => {
        if(!err){
          res.status(200).send({message: 'UserScore created/updated successfully'})
        } else {
          res.status(500).send({message: err.message})
        }
      })
      )
      
  }
}

export default UserScoreController