import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    content: [{type: String, required: true}],
    image: {type: String},
    questions: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'questions', required: true
    }],
  }
);

const subTask = mongoose.model('subTasks', subTaskSchema);

export default subTask;

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