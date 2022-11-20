import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    id: {type: String},
    question: {type: String, required: true},
    answer: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    type: {type: String, required: true},
    options: [{type: mongoose.Schema.Types.ObjectId, ref: 'options', required: true}],
  }
);

const Question = mongoose.model('questions', QuestionSchema);

export default Question;

/*

export interface TaskProps  {
  
  title:         string,
  tasksQuantity: number, // isFinished = tasksQuantity == tasksFinished
  tasksFinished: number,
  icon:          string,
  id:            string,

  tasks?: SubtaskProps[]  
}



export interface SubtaskProps  {
  question?: string,
  answer?: string,
  description?: string,
  isCorrect?: boolean,
  image?: string,
  type?: 'select' | 'choise' | 'selectImage',
  options?: OptionProps[],
}


export interface OptionProps  {
  title: string,
  isCorrect: boolean,
  description?: string,
  id?: string | number,
  image?: string,
}

*/


