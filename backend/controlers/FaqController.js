import FaqModel from "../models/Faq.js";

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await FaqModel.find();

    res.json(faqs);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить информацию об изображение",
    });
  }
};

export const createFaq = async (req, res) => {

  try {
    const doc = new FaqModel({
      id: req.body.id,
      content_ua: req.body.content_ua,
      content_en: req.body.content_en,
      content_ru: req.body.content_ru,
    });

    const faq = await doc.save();

    res.json(faq);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать изображение",
    });
  }
};