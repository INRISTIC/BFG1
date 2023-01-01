import PrivelegeModel from "../models/Privelege.js";

export const getAllPrivileges = async (req, res) => {
  try {
    const privileges = await PrivelegeModel.find();

    res.json(privileges);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить информацию об изображение",
    });
  }
};

export const createPrivilege = async (req, res) => {

  try {
    const doc = new PrivelegeModel({
      id: req.body.id,
      content_ua: req.body.content_ua,
      content_en: req.body.content_en,
      content_ru: req.body.content_ru,
    });

    const privilege = await doc.save();

    res.json(privilege);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать изображение",
    });
  }
};