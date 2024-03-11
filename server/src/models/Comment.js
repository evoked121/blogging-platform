import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  author: { type: String },
  content: { type: String },
});

export default mongoose.model("Comment", commentSchema);
