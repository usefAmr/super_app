import {Schema , model} from "mongoose"

const serviceCategorySchema = new Schema({
  categoryEnglishName: {
    type: String,
    required: true
  },
  categoryArabicName: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = model('ServiceCategories', serviceCategorySchema);
