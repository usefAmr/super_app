import {Schema , model} from "mongoose"

const serviceAgentSchema = new Schema({
fromDate: {
    type: Date
},
toDate: {
    type: Date
},
fromHour: {
    type: Number
},
toHour: {
    type: Number
},
slots: {
    type:Number,
    allowNull: false
},
serviceAgentId: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceAgent',
    required: true
},
});

module.exports = model('ServiceAgent', serviceAgentSchema);
