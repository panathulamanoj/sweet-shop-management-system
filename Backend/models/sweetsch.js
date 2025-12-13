import mongoose from 'mongoose';
const schema = mongoose.Schema;
//defining schema for storing sweets
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
        },
        category: {
         type: String,
         enum: ["milk-based", "flour-based", "dry-fruit"],
         required: true
        }

    }
);
const model= new mongoose.model("Sweets",sweetschema);
//exporting the sweetsmodel as default so it can be used for stroing and retreving int routing file
export default model;