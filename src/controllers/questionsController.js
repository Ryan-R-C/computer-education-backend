import subtasks from "../models/Question.js";

class SubtaskController {

  static listQuestions = (req, res) => {
    const query = req.query

    subtasks.find(query)
      .populate('options')
      .exec((_err, subtasks) => {
        res.status(200).json(subtasks)
  })
  }

  static listQuestionById = (req, res) => {
    const id = req.params.id;

    subtasks.findById(id)
      .populate('options')
      .exec((err, subtasks) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id not not localized.`})
      } else {
        res.status(200).send(subtasks);
      }
    })
  }

  static createQuestion = (req, res) => {
    let question = new subtasks(req.body);

    question.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - faild to create question.`})
      } else {
        res.status(201).send(question.toJSON())
      }
    })
  }

  static updateQuestion = (req, res) => {
    const id = req.params.id;

    subtasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Question updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteQuestion = (req, res) => {
    const id = req.params.id;

    subtasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Question deleted successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default SubtaskController