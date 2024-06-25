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

const ServiceCategories = model('ServiceCategories', serviceCategorySchema);

export default ServiceCategories;

