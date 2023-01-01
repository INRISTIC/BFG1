import SettingsModel from "../models/Settings.js";

export const getSettings = async (req, res) => {
  try {
    const settings = await SettingsModel.find();

    res.json(settings[0]);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить информацию об изображение",
    });
  }
};

export const createSettings = async (req, res) => {

  try {
    const doc = new SettingsModel({
      id: req.body.id,
      online: req.body.online,
      users_count: req.body.users_count,
      users_sms: req.body.users_sms,
      days_count: req.body.days_count,
      cf_donat: req.body.cf_donat,
      cf_donat_min: req.body.cf_donat_min,
      cf_donat_max: req.body.cf_donat_max,
    });

    const setting = await doc.save();

    res.json(setting);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать изображение",
    });
  }
};