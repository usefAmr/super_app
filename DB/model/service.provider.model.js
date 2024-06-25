import {Schema , model} from "mongoose"

const serviceProviderSchema = new Schema({
  spEnglishName: {
    type: String,
    required: true
  },
  spArabicName: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceCategories',
    required: true
  }
});

const ServiceProviders = model('ServiceProviders', serviceProviderSchema);

export default ServiceProviders;

