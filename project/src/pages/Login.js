import React, { useState } from 'react';
import { login } from '../Authication';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsucess]=useState('')
     const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');
            setusername('')
            setpassword('')
            setsucess('Successfully Logged In')
            seterror('')
            navigate("/Home")
            
        }catch(err){
            console.log('Login Error',err)
            seterror('Logged In Failed')
            setsucess('')
        
        }
   }

  return (
    <form onSubmit={handleSubmit}>
    <label className='name1'>UserName:</label>
    <input 
        className='box'
        type='text'
        name='name' 
        value={username}
        onChange={(e)=>setusername(e.target.value)}/>

 <br></br><br></br>

 <label className='name2'>Password:</label>
    <input 
        className='box1'
        type='password'
        name='password' 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}/>

<br></br><br></br>

    <button type='submit' className='btn4'>Login</button>
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}

</form>
  )
}

export default Login