import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

const Update = () => {
 const paramData = useParams();


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
   getData()
  }, []);
const getData= async()=>{
     const data = await fetch(`http://localhost:5000/products/${paramData.id}`);;
    const res = await data.json();
    setName(res.name || "");
    setPrice(res.price || "");
    setCategory(res.category || "");
    setBrand(res.brand || "");
    setId(res._id || "");

     
}
   
  const updateHandler = async () => {
    try {
      const data = await fetch(`http://localhost:5000/update/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, category, brand }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const res = await data.json();
      console.log(res)
      if(res){
        alert("data uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2vh",
      }}
    >
      <h1>update product</h1>
      <input
        style={{ width: "25%", minHeight: "30px" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "25%", minHeight: "30px" }}
        placeholder="price"
      />
      <input
        style={{ width: "25%", minHeight: "30px" }}
        type="text"

        value={category}
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        style={{ width: "25%", minHeight: "30px" }}
        type="text"
        value={brand}
        placeholder="brand"
        onChange={(e) => setBrand(e.target.value)}
      />
      <button style={{padding:'2vh'}} onClick={updateHandler}>update</button>
    </div>
  );
};

export default Update;
