import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
  },
  { collection: "rehobot-notes" }
);

export default mongoose.model("notesModel", notesSchema);
