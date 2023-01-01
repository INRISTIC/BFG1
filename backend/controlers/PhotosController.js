import PhotoModel from "../models/Photos.js";

export const getAllPhotos = async (req, res) => {
  try {
    const photos = await PhotoModel.find();

    res.json(photos);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить информацию об изображение",
    });
  }
};

export const createPhoto = async (req, res) => {

  try {
    const doc = new PhotoModel({
      id: req.body.id,
      photo_src: req.body.photo_src,
    });

    const photo = await doc.save();

    res.json(photo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать изображение",
    });
  }
};