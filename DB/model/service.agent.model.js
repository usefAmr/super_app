import {Schema , model} from "mongoose"

const serviceAgentSchema = new Schema({
agentEnglishName: {
    type: String,
    required: true
    },
agentArabicName: {
    type: String,
    required: true
    },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  serviceAgentfees: {
    type:Number,
    allowNull: false
},
state:{
    type:String,
    enum : ['active','locked'],
    default : 'active'
},
isVisible: {
    type: Boolean,
    default: false // Optional: Set a default value if needed
},
hasCalendar: {
    type: Boolean,
    default: false // Optional: Set a default value if needed
}
});

module.exports = model('ServiceAgent', serviceAgentSchema);
