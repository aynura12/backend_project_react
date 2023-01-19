const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const {v4:uuiddv4}=require("uuid")
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let products = [
  {
    id: 0,
    picture:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Planet",
    price: 30,
    isDiscounted: true,
    rate: 30,
  },
  {
    id: 1,
    picture:
      "https://media.istockphoto.com/id/171149710/photo/venus.jpg?s=612x612&w=0&k=20&c=Xg818UCjSzDgVAlPWnaeAMP_AKCF9RJp_XUSv57WVwo=",
    name: "Moon",
    price: 20,
    isDiscounted: true,
    rate: 20,
  },
];
let idCounter = 2;
app.get("/products", (req, res) => {
    
  res.json({
    succes: true,
    quantitiy: products.length,
    data: products,
  });
});

app.post("/products", (req, res) => {
    const id=uuiddv4()
  const newproduct = { ...req.body, id: idCounter++};
 products = [...products, newproduct];
  res.json({
    success: true,
    data: products,
  });
});


app.delete("/products/:id",(req,res)=>{
    const id=+req.params.id;
    products=products.filter(u=>u.id!=id)
    res.json({
        success:true,
        data:products, 
    })
    })


    app.put("/products/:id",(req,res)=>{
        const id=+req.params.id;
       products= products.filter(u=>u.id!==id)
       const updateProducts={
        id:id,
        name:req.body.name,
        rate:req.body.age,
       };
      products.push(updateProducts )
       res.json({
        success:true 
       })
    })

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server on the port",${PORT}`);
});
