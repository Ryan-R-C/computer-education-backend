import mongoose from "mongoose"


const urlConnection = process.env.DATABASE_URL

mongoose.connect(urlConnection);

const db = mongoose.connection;

export default db;