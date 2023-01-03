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

app.get("/api/photos", getAllPhotos);
app.post("/api/photos", photosCreateValidation, createPhoto);

app.get("/api/faq", getAllFaqs);
app.post("/api/faq", faqCreateValidation, createFaq);

app.get("/api/privilege", getAllPrivileges);
app.post("/api/privilege", privilegeCreateValidation, createPrivilege);

app.get("/api/regulation", getAllRegulation);
app.post("/api/regulation", regulationCreateValidation, createRegulation);

app.get("/api/settings", getSettings);
app.post("/api/settings", settingsCreateValidation, createSettings);

app.get("/api/posts", getAll);
app.get("/api/posts/:id", getOne);
app.post("/api/posts", postCreateValidation, create);
app.delete("/api/posts/:id", remove);
app.patch("/api/posts/:id", postCreateValidation, checkAuth, update);


app.listen(3005, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
