import mongoose from "mongoose"

const urlConnection = "mongodb+srv://ryan:Ryansp123@cluster0.dgsm3wt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(urlConnection);

const db = mongoose.connection;

export default db;