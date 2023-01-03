import mongoose from "mongoose";

const PostScheme = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    title_ua: {
      type: String,
      required: true,
    },
    title_en: {
      type: String,
      required: true,
    },
    title_ru: {
      type: String,
      required: true,
    },
    content_ua: {
      type: String,
      required: true,
    },
    content_en: {
      type: String,
      required: true,
    },
    content_ru: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      // default: 0
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', PostScheme);