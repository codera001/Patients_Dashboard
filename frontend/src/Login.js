import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';
import hospitalLogo from '../src/assets/hospitalLogo.png';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [backendError, setBackendError] = useState([])
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }
     axios.defaults.withCredentials = true;
    const handleSubmit = (e) => { e.preventDefault();
         const err = Validation(values); setErrors(err); 
         if (err.email === "" && err.password === "") {axios.post('http://localhost:8081/', values)
         .then(res=>{
            
            if(res.data.Status === "Success"){
                navigate('/home')
            } else {
                alert("no record exist");
            }
               
            })
                .catch(err => console.log(err)); 
            } }

            // const handleSubmit = (event) => { 
            //     event.preventDefault(); const err = Validation(values); setErrors(err); 
            //     if (err.email === "" && err.password === "") { 
            //         axios.post('http://localhost:8081/login', values)
            //         .then(res => { navigate('home'); })
            //         .catch(err => console.log(err)); } }
        
    return (
        <div className='d-flex justify-content-center align-items-center  vh-100'  >
            <div className='bg-white p-3 rounded w-25'>
            <img
                  // alt="profile-user"
                  width="100px"
                  height="100px"
                  src={hospitalLogo}
                  style={{ cursor: "pointer", borderRadius: "50%"}}
                />
                <h2    style={{  textAlign:"center"}}>Sign-In</h2>
                {backendError ? backendError.map( e => (<p className='text-danger'>{e.msg}</p>)) : <span></span>} 
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Password</strong> </label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You agree to our terms and policies </p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login