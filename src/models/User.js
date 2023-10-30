import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: {type: String},
    email: {type: String},
    nome: {type: String},
    nickName: {type: String},
    password: {type: String},
  }
);

const user = mongoose.model('user', UserSchema);

export default user;
