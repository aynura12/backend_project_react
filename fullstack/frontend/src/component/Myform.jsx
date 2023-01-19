import React, { useState, useEffect } from "react";
import { formSchema } from "../schema/formSchema";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import "../style/form.css"

const Myform = () => {
  const [categories, setCategories] = useState([]);
  const URL = "http://localhost:8080/products";
  const fetchCategories = async () => {
    await axios.get(URL).then((res) => setCategories(res.data.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    handleChange,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };
  
const [data,setData]=useState(null)

const BAse_url="http://localhost:8080/products"
  const myfnc=()=>{
    axios
    .post(BAse_url, data)
    .then((data ) => {
      setData(data);
    });
;
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(formSubmit)}>
        <h1>My Form</h1>

        <p>
          <a
            style={{ color: "black", textDecoration: "none", fontSize: 20 }}
            href="http://localhost:8080/products"
          >
            My api link
          </a>
        </p>
       
        <TextField
        
          className="input"
          {...register("name")}
          id="name"
          label="name"
          variant="outlined"
        />
        {errors.name ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.name.message}
          </span>
        ) : (
          <></>
        )}
        <TextField
          className="input"
          type="number"
          {...register("price")}
          id="price"
          label="price"
          variant="outlined"
        />
        {errors.quantityPerUnit ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.quantityPerUnit.message}
          </span>
        ) : (
          <></>
        )}
        
        {/* <FormControlLabel
          control={<Checkbox defaultChecked color="success" />}
          label="Is Discounted"
        /> */}
        <Button 
        onClick={myfnc}
          style={{ backgroundColor: "green", width: 70, padding: "10px 40px" }}
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default Myform
