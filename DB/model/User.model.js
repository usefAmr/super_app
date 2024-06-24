import {Schema , model} from "mongoose"

const userSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true,
        unique : true
    },
    level : {
        type:String,
        enum : ['1','2','3','4']
    },
    password : {
        type:String,
        required : true
    },
    role : {
        type: String,
        enum : ['admin','student'],
        default: 'student'
    },
    status:{
        type:String,
        enum : ['online','offline'],
        default: 'online'
    },
    image: {
        type: Object,
        default: 'https://asset.cloudinary.com/dkaflobgm/887fe32dc703b4d02112b7bc18b0307c'|| null
    },
    student_status:{
        type:String,
        enum : ['archived','active'],
        default: 'active'
    },
    balance: {
        type: Number, // Use Number for floating point numbers
        default: 0.0 // Default value
    },
    national_id: {
        type: Number, // Use Number for floating point numbers
        default: 0
    },
    study_name:{
        type:String,
        enum : ['affiliated','full-time'],
        default: 'full-time'
    },
    faculty:{
        type:String,
        default: "computer science"
    },

},{
    timestamps : true
})

const userModel = model('User',userSchema)

export default userModel

