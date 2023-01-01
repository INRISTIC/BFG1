import express from "express";

import mongoose from "mongoose";

import cors  from "cors";

import {
  postCreateValidation,
  photosCreateValidation,
  regulationCreateValidation,
  faqCreateValidation,
  privilegeCreateValidation,
  settingsCreateValidation
} from "./validation.js";

import checkAuth from "./utils/checkAuth.js";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "./controlers/PostController.js";

import {
  getSettings,
  createSettings,
} from "./controlers/SettingsController.js";

import {
  getAllPhotos,
  createPhoto,
} from "./controlers/PhotosController.js";

import {
  getAllFaqs,
  createFaq,
} from "./controlers/FaqController.js";

import {
  getAllPrivileges,
  createPrivilege,
} from "./controlers/PrivelegeController.js";

import {
  getAllRegulation,
  createRegulation,
} from "./controlers/RegulationsController.js";

mongoose
  .connect(
    "mongodb+srv://admin:30027022@cluster0.4hnjb8w.mongodb.net/test"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();


app.use(express.json());
app.use(cors())

app.get("/photos", getAllPhotos);
app.post("/photos", photosCreateValidation, createPhoto);

app.get("/faq", getAllFaqs);
app.post("/faq", faqCreateValidation, createFaq);

app.get("/privilege", getAllPrivileges);
app.post("/privilege", privilegeCreateValidation, createPrivilege);

app.get("/regulation", getAllRegulation);
app.post("/regulation", regulationCreateValidation, createRegulation);

app.get("/settings", getSettings);
app.post("/settings", settingsCreateValidation, createSettings);

app.get("/posts", getAll);
app.get("/posts/:id", getOne);
app.post("/posts", postCreateValidation, create);
app.delete("/posts/:id", remove);
app.patch("/posts/:id", postCreateValidation, checkAuth, update);

app.listen(3005, 'https://forum.bfgproject.com/', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
