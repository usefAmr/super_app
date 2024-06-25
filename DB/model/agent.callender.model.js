import {Schema , model} from "mongoose"

const AgentCallenderSchema = new Schema({
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

const AgentCallender = model('AgentCallender', AgentCallenderSchema);

export default AgentCallender;
