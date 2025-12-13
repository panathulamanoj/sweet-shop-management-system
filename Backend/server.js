import express from 'express';
import {v4 as uuid} from 'uuid';
import sweetsmodel from './models/sweetsch.js';
import mongoose from 'mongoose';
import mongoStore from 'connect-mongo';
const dburl=process.env.db_Url || 'mongodb://localhost:27017/yelp-camp';
const port=process.env.PORT || 3000;
import dotenv from "dotenv";
dotenv.config();
const app = express();
//connecting  to mongodb database cloud mongoAtlas
mongoose.connect(dburl);
const db=mongoose.connection;
db.on("error",console.error.bind(console,"Connection error:"));
db.once("open",()=>{
    console.log("successfully connected to db");
});
app.listen(port,()=>{
    console.log("listening on port 3000");
});


app.use(express.json());

//api endpoint to create a new sweet
app.post("/api/sweets",async(req,res)=>{
const nsweet = new sweetsmodel(req.body);
await nsweet.save();
return res.status(201).send(nsweet);
});

//api endpoint to get all sweets
app.get("/api/sweets",async(req,res)=>{
    const sweets = await sweetsmodel.find();
return res.status(200).send(sweets);
});
 
//api endpoint to search sweets based on category,price,name
app.get("/api/sweets/search",async(req,res)=>{
try {
    const { name, category, minPrice, maxPrice } = req.query;

    const filter = {};

    // search by name (partial, case-insensitive)
    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    // search by category
    if (category) {
      filter.category = category;
    }

    // search by price range
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const sweets = await sweetsmodel.find(filter);

    return res.status(200).json(sweets);
  } catch (err) {
    return res.status(500).json({ message: "Search failed", error: err.message });
  }
});


//api endpoint to edit a sweet name or price
app.put("/api/sweets/:id",async(req,res)=>{
const {id} = req.params;
console.log(id);
let found= await sweetsmodel.findById(id);
if(!found)
{
    return res.send("cannot find sweet with that id");
}
const sweet = await sweetsmodel.findByIdAndUpdate(id,{$set: {name: req.body.name,price: req.body.price}},{ new: true, runValidators: true });
return res.status(201).send(sweet);    
});

//api endpoint to delete a sweet
app.delete("/api/sweets/:id",async(req,res)=>{
const {id} = req.params;
let found = await sweetsmodel.findById(id);
if(!found)
{
     return res.send("cannot find sweet with that id");
}
await sweetsmodel.findByIdAndDelete(id);
return res.status(204).send("successfully deleted sweet");    
})

//api endpoint to purchase sweet thus reducing its quantity
app.post("/api/sweets/:id/purchase",async(req,res)=>{
    const body=req.body;
    const {id} = req.params;
    let found=await sweetsmodel.findById(id);
    if(!found)
{
     return res.send("cannot find sweet with that id");
}
let newquantity=found.quantity-body.quantity;
    await sweetsmodel.findByIdAndUpdate(id,{$set: {quantity:newquantity}},{ new: true, runValidators: true });
return res.send("purchased a sweet");
});

//api endpoint to restock a sweet thus increasing its quantity
app.post("/api/sweets/:id/restock",async(req,res)=>{
      const body=req.body;
    const {id} = req.params;
      let found=await sweetsmodel.findById(id);
    if(!found)
{
     return res.send("cannot find sweet with that id");
}
    let newquantity=found.quantity+body.quantity;
    await sweetsmodel.findByIdAndUpdate(id,{$set: {quantity:newquantity}},{ new: true, runValidators: true });

return res.send("restock a sweet");
});
