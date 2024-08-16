import options from "../models/Option.js";

class OptionController {

  static listOptions = (req, res) => {
    const query = req.query

    options.find(query)
      .exec((_err, options) => {
        res.status(200).json(options)
  })
  }

  static listOptionById = (req, res) => {
    const id = req.params.id;

    options.findById(id)
      .exec((err, options) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id not not localized.`})
      } else {
        res.status(200).send(options);
      }
    })
  }

  static createOption = (req, res) => {
    let option = new options(req.body);

    option.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - faild to create option.`})
      } else {
        res.status(201).send(option.toJSON())
      }
    })
  }

  static updateOption = (req, res) => {
    const id = req.params.id;

    options.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Option updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteOption = (req, res) => {
    const id = req.params.id;

    options.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Option deleted successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default OptionController