import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  photo_src: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
})

export default mongoose.model("Photo", PhotoSchema)