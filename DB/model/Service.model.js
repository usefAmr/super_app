import {Schema , model} from "mongoose"

const serviceSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    code : {
        type:String,
        required : true
    },
    description : {
        type:String,
        required : true
    },
    fees: {
        type:Number,
        allowNull: false
    },
    validUntilDate:String , 
    state:{
        type:String,
        enum : ['active','locked'],
        default : 'active'
    },
    type:{
        type:String,
        enum : ['sheduled','not_sheduled','agent'],
        default : 'active'
    },
    providerId: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceProviders',
        required: true
    },
    from: {
        type: Date
    },
    to: {
        type: Date
    }
},{
    timestamps : true
})

const serviceModel = model('Service',serviceSchema)

export default serviceModel

