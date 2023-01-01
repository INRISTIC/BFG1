import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  online: {
    type: Number,
    require: true,
  },
  users_count: {
    type: Number,
    require: true,
  },
  users_sms: {
    type: Number,
    require: true,
  },
  days_count: {
    type: Date,
    require: true,
  },
  cf_donat: {
    type: Number,
    require: true,
  },
  cf_donat_min: {
    type: Number,
    require: true,
  },
  cf_donat_max: {
    type: Number,
    require: true,
  }
}, {
  timestamps: true,
})

export default mongoose.model("Settings", SettingsSchema)