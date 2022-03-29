import mongoose from "mongoose";

const url =
  "mongodb+srv://rehobot-notes:Converse04@cluster0.qehyw.mongodb.net/rehobot-notes?retryWrites=true&w=majority";

mongoose.connect(url);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to MongoDB");
});
db.on("error", () => {
  console.log("error to MongoDB");
});

export default db;
