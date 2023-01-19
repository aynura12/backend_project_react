import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import "../style/home.css"
const Home = () => {
  const [products, setProducts] = useState(null);

  const getData = async () => {
    const res =await axios.get("http://localhost:8080/products");
    setProducts(res.data.data);
  };

  useEffect(() => {
    getData(); 
  }, []);

  return (
    <div className="container">
        {products?.map((product,index)=>{
            return(<div className="mycard"  key={index}><img src={product.picture}></img>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button>View details</button></div>)
        })}
      
     
    </div>
  );
};

export default Home;
