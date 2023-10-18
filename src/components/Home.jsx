import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    let data = await fetch("http://localhost:5000/products", {
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    let res = await data.json();
   
    setProduct(res);
  }

  const deleteHandler = async (id) => {
    let data = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    });
    data = await data.json();
    console.log(data);
    getProduct();
  };

  const searchProduct = async(e)=>{
  let key = e.target.value;
  if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
      setProduct(result)
    }
  }else{
getProduct()
  }
 
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        flexDirection: "column",
        alignItems: "center",
        gap: "2vh",
      }}
    >
      <h1>Product List</h1>
 <div>
  <input type="text" placeholder="enter product name" onChange={searchProduct}/>
   <button onClick={searchProduct}>search product</button>
 </div>
      <table>
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Operation</th>
     
          </tr>
          {

          product.length>0?  product.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>
                  <button
                    type="button"
                    style={{ padding: "0.1em", cursor: "pointer" }}
                    onClick={() => deleteHandler(item._id)}
                  >
                    delete
                  </button>{" "}
                  <NavLink to={"/update/"+item._id}>
                    <button style={{ padding: "0.1em", cursor: "pointer" }}>
                      edit
                    </button>
                  </NavLink>{" "}
                </td>
              </tr>
            );
          }):<tr><td><h1>no data</h1></td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
