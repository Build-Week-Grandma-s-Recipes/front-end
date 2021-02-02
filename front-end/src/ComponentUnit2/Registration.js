import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import axios from 'axios'
import './css/register.css'
import {Link} from 'react-router-dom'
import Footer from '../ComponentUnit3/Footer'

const schema = yup.object().shape({
    username: yup.string().required('Username required.'),
    password: yup.string().required('Password required.').min(6,'Password must be 6 or more characters'),
})

const regDefault = {username: '',password:'',}

export default function Registration() {
const [registration, setRegistration] = useState(regDefault);
const [disabled, setDisabled] = useState(true);
const [errors, setErrors] = useState({username: '',password: ''})

//Form errors handler to be used in onChange handler
const setFormErrors = (name, value) =>{
    yup.reach(schema, name).validate(value)
        .then(()=> setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}
//Form onChange handler
const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormErrors(name, value)
    setRegistration({...registration, [name]: value})
  };
// Button disable/enable toggle by validation
useEffect(()=>{
    schema.isValid(registration).then(valid => setDisabled(!valid))
},[registration])
//Form onSubmit handler
const onSubmit = evt=>{
    evt.preventDefault();
    const newUser = {username: registration.username.trim(), password: registration.password.trim()}
    axios.post('https://node-buildwk-cookbook.herokuapp.com/api/auth/register', newUser)
    .then(
        
        setRegistration(regDefault)
    )
    .catch(err=>{
        console.log(err)
        debugger})
}

    return (
        <div className='img'>
        <div className='regBox' >
            <form className='regForm' onSubmit={onSubmit}>
                <h1>Register</h1>
            <input
            type="text"
            name="username"
            className='regInput'
            onChange={onChange}
            value={registration.username}
            placeholder="Username"
            maxLength="30"
          />
          <input
            type="text"
            name="password"
            className='regInput'
            onChange={onChange}
            value={registration.password}
            placeholder="Password"
            maxLength="30"
          />
          <div style={{color: '#B61118',fontWeight: 'bold'}}>
              <div>{errors.username}</div>
              <div>{errors.password}</div>
              </div>
          <button className='regBtn' disabled={disabled}>Create Account</button>
          {/* <a href='#'>Back to Login</a> */}
          <Link to='/' className="logOutLink">Back to Login</Link>
            </form>
            <div style={{width: '100%'}}>
            <Footer/>
            </div>
        </div>
        </div>
    )
}
