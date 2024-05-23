import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';

function SignIn() {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  const dispatch = useDispatch();

  let loginHandler = async (e) => {
    e.preventDefault();
    // dispatch(signin(email,password));
    let data;
    try{
      data = await axios.post("http://localhost:8081/api/login",{
        email : email,
        password : password
      })

      if(data != null){
        localStorage.setItem("jwt",JSON.stringify(data.jwttoken));
      }
    }
    catch(e){
      console.log(e);
    }

    console.log(data.data.jwttoken);
    
    
  }

  return (
    <div>
      <form onSubmit={loginHandler}>
         <label>Email:</label>
         <input 
           type='text'
           placeholder='Enter your Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)} 
          ></input>
          <label>Password:</label>
         <input 
           type='password'
           placeholder='Enter your Password'
           value={password}
           onChange={(e) => setPassword(e.target.value)} 
          ></input>
          <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default SignIn;
