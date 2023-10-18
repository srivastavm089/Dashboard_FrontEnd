import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navidate = useNavigate()

    useEffect(()=>{
  let auth = localStorage.getItem('data');
  if(auth){
   navidate('/')
  }
    },[])
  
    const [email,setEmail] = useState('');
const [password,setPassword] = useState('')
const loginHandle =async()=>{
    console.log(password, email);
let result = await fetch('http://localhost:5000/login', {
    method:'post',
    body:JSON.stringify({email,password}),
    headers:{
        'Content-Type':'application/json'
    }
})
result = await result.json();
console.log(result);
if(result.auth){
 localStorage.setItem('data', JSON.stringify(result.data));
 localStorage.setItem('token', JSON.stringify(result.auth));
 navidate('/')
}else{
    alert("please enter correct password")
}

}
  return (
    <div style={{display:'flex', flexDirection:"column", gap:"2vh", alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:"column", gap:"2vh", alignItems:'center'}}>
        <input type="text"  placeholder='enter email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder='enter password' onChange={(e)=> setPassword(e.target.value)} />
        </div>
       
        <div>
            <button onClick={loginHandle}>login</button>
        </div>
    </div>
  )
}

export default Login