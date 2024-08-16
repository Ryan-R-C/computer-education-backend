import subtasks from "../models/SubTask.js";

class SubtaskController {

  static questionsPopulate = {
      path: 'questions',
      populate: {
        
        path: 'options',
        model: 'options'
      }
    }

  static listSubTasks = (req, res) => {
    const query = req.query
    
      subtasks.find(query)
        .populate(this.questionsPopulate)
        .exec((err, subtasks) => {
          res.status(200).json(subtasks)
    })
  }

  static listSubTaskById = (req, res) => {
    const id = req.params.id;

    subtasks.findById(id)
      .populate(this.questionsPopulate)
      .exec((err, subtasks) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id not not localized.`})
      } else {
        res.status(200).send(subtasks);
      }
    })
  }

  static createSubTask = (req, res) => {
    let subTask = new subtasks(req.body);

    subTask.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - faild to create subTask.`})
      } else {
        res.status(201).send(subTask.toJSON())
      }
    })
  }

  static updateSubTask = (req, res) => {
    const id = req.params.id;

    subtasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'SubTask updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteSubTask = (req, res) => {
    const id = req.params.id;

    subtasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'SubTask deleted successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default SubtaskController