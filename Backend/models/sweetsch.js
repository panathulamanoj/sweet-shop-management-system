import mongoose from 'mongoose';
const schema = mongoose.Schema;

const sweetschema= new schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }
);
const model= new mongoose.model("Sweets",sweetschema);
export default model;