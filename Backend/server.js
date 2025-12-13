import express from 'express';
import {v4 as uuid} from 'uuid';
import sweetschema from './models/sweetsch.js';
const app = express();

app.listen(3000,()=>{
    console.log("listening on port 3000");
});

let users=[];
let sweets=[
    {id:uuid(),name:"kalakkand",price:150,quantity:30},
    {id:uuid(),name:"kaju katli",price:170,quantity:50},
    {id:uuid(),name:"gulab jamun",price:160,quantity:70}
];

app.use(express.json());


app.post("/api/sweets",(req,res)=>{
const body = req.body;
const nsweet= body;
nsweet.id=uuid();
sweets.push(nsweet);
return res.status(200).send(body);
});


app.get("/api/sweets",(req,res)=>{
return res.status(201).send(sweets);
});

app.get("/api/sweets/search",(req,res)=>{
    return res.status(201).send("all sweets based on search");
});



app.put("/api/sweets/:id",(req,res)=>{
const body = req.body;
const {id} = req.params;
console.log(id);
let bool=false;
for(let i=0;i<sweets.length;i++)
{
    console.log(sweets[i].id);
     if(id==sweets[i].id)
     {
        sweets[i].name=body.name;
        sweets[i].price=body.price;
        bool=true;
        break;
     }
}
if(!bool)
{
    return res.send("cannot find sweet with that id");
}
return res.status(201).send(body);    
});


app.delete("/api/sweets/:id",(req,res)=>{
const {id} = req.params;
let bool = false;
for(let i=0;i<sweets.length;i++)
{
    if(id==sweets[i].id)
    {
        bool=true;
        break;
    }
}
if(!bool)
{
     return res.send("cannot find sweet with that id");
}
sweets=sweets.filter((sweet)=>{
    return sweet.id!=id;
});
return res.status(200).send("successfully deleted sweet");    
})

app.post("/api/sweets/:id/purchase",(req,res)=>{
    const body=req.body;
    const {id} = req.params;
    for(let i=0;i<sweets.length;i++)
    {
        if(sweets[i].id==id)
        {
            sweets[i].quantity-=body.quantity;
            break;
        }
    }
return res.send("purchased a sweet");
});


app.post("/api/sweets/:id/restock",(req,res)=>{
      const body=req.body;
    const {id} = req.params;
    for(let i=0;i<sweets.length;i++)
    {
        if(sweets[i].id==id)
        {
            sweets[i].quantity+=body.quantity;
            break;
        }
    }
return res.send("restock a sweet");
});
