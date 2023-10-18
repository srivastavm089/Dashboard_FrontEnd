import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const style = {
    padding: "1vh",
    width: "50vh",
    border: "1px solid lightblue",
  };

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  submitHandler =async ()=>{
    console.warn(name,email,password)
    let result = await fetch('http://localhost:5000/register', {
      method:"post",
      body:JSON.stringify({
        name,
        email,
        password
      }),
      headers:{
        "Content-Type":'application/json'
      }
    });
     result = await result.json();
     console.log(result)
    if(result.message==="done"){
      navigate('/');
      localStorage.setItem('data', JSON.stringify(result.newResult));
      localStorage.setItem('data', JSON.stringify(result.auth));

    }else{
      alert("user already register")
      navigate('/signup')
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2vh",
          margin: "15vh",
        }}
      >
        <h1>Register</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          <input
            style={{
              padding: style.padding,
              width: style.width,
              border: style.border,
            }}
            type="text"
            placeholder="Enter your name"
            onChange={(e)=> setName(e.target.value)}
          />
          <input
            style={{
              padding: style.padding,
              width: style.width,
              border: style.border,
            }}
            type="email"
            placeholder="Enter your email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            style={{
              padding: style.padding,
              width: style.width,
              border: style.border,
            }}
            type="password"
            placeholder="Enter your password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            style={{
              padding: "2vh",
              background: "orange",
              border: "1px solid white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={()=> submitHandler()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
