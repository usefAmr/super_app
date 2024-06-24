import {Schema , model} from "mongoose"

const serviceSchema = new Schema ({
    name : {
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
    }
},{
    timestamps : true
})

const serviceModel = model('Service',serviceSchema)

export default serviceModel

