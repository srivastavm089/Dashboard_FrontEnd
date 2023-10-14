import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [error,setError] = useState(false);
  const addProduct = async () => {
    if(!name || !price || !category || !brand){
      setError(true);
      return false;
    }
    console.log(name, price, category, brand);
    let userData = JSON.parse(localStorage.getItem("data"));
    const userId = userData._id;

    const result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, userId, brand }),
      headers:{
        "Content-Type":'application/json'
      }
    });
    console.log(result)
    
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
      <h1>Add product</h1>
      <input
        style={{ width: "50vh", height: "5vh", paddingLeft: "5px" }}
        type="text"
        placeholder="enter product name"
        onChange={(e) => setName(e.target.value)}
      />
      {
        !name && error?      <span>please enter product name</span>:null
      }
      <input
        style={{ width: "50vh", height: "5vh", paddingLeft: "5px" }}
        type="text"
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
       {
        !price && error?      <span>please enter price</span>:null
      }
      <input
        style={{ width: "50vh", height: "5vh", paddingLeft: "5px" }}
        type="text"
        placeholder="enter category"
        onChange={(e) => setCategory(e.target.value)}
      />
       {
        !category && error?      <span>please enter  category</span>:null
      }
      
      <input
        style={{ width: "50vh", height: "5vh", paddingLeft: "5px" }}
        type="text"
        placeholder="enter product company"
        onChange={(e) => setBrand(e.target.value)}
      />
       {
        !brand && error?      <span>please enter brand</span>:null
      }
      <button
        type="button"
        style={{
          background: "orange",
          border: "none",
          padding: "2vh",
          color: "white",
          cursor: "pointer",
        }}
        onClick={addProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default Add;
