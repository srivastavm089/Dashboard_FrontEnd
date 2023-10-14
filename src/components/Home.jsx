import React, { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    let data = await fetch("http://localhost:5000/products");
    let res = await data.json();
    setProduct(res);
  }

  return (
    <div style={{display:'flex', justifyContent:'center', marginTop:"5%", flexDirection:'column', alignItems:'center', gap:'2vh'}}>
      <h1>Product List</h1>
      <table>
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>brand</th>
          </tr>
           {
            product.map((item,index)=>{
              return <tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
              </tr>
            })
           }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
