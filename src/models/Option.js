import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    isCorrect: {type: Boolean, required: true},
  }
);

const options = mongoose.model('options', OptionSchema);

export default options;

/*


export interface OptionProps  {
  title: string,
  isCorrect: boolean,
  description?: string,
  id?: string | number,
  image?: string,
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
*/