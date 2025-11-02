import React, { useState } from 'react'
import { register } from '../Authication';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsucess]=useState('')
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
         e.preventDefault();
         try{
            await register(username,password);
            setsucess('Registered Succuseffly');
            seterror('');
            navigate("/login");
         }catch(err){
            console.log("Registration Error",err);
            seterror("Registration Failed");
            setsucess('');
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

        <button type='submit' className='btn4'>Register</button>
        {success && <p style={{color:"Green"}}>{success}</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
            </form>
    )
}

export default Register