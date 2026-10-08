const mongoose = require("mongoose")

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
   },

   email: {
     type: String,
     required: true
   },

   phone: {
    type: String,
    required: true
   },

   service: {
     type: String,
     required: true
   },

   requirement: {
      type: String,
      required: true
  },

   status: {
     type: String,
     default: "pending"
  },

})

module.exports = mongoose.model("Quote", quoteSchema)