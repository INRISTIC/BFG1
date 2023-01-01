import RegulationsModel from "../models/Regulations.js";

export const getAllRegulation = async (req, res) => {
  try {
    const regulations = await RegulationsModel.find();

    res.json(regulations);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить информацию об изображение",
    });
  }
};

export const createRegulation = async (req, res) => {

  try {
    const doc = new RegulationsModel({
      id: req.body.id,
      content_ua: req.body.content_ua,
      content_en: req.body.content_en,
      content_ru: req.body.content_ru,
    });

    const regulation = await doc.save();

    res.json(regulation);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать изображение",
    });
  }
};