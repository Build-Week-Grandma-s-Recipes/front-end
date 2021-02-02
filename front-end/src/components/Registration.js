import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

const RegBox = styled.div`
// border: 1px solid blue;
width: 100%;
height: 100%;
display: flex;
flex-flow: column nowrap;
align-items: center;

`
const RegForm = styled.form`

border: 5px solid rgb(0,0,0,.8);
background-color: rgb(255,255,255,.6);
width: 400px;
height: 300px;
// margin: 50px;
margin-top: 15%;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
`
const schema = yup.object().shape({
    username: yup.string().required('Username required.'),
    password: yup.string().required('Password required.').min(6,'Password must be 6 or more characters'),
})

export default function Registration() {
const [registration, setRegistration] = useState({username: '',password:'',});
const [disabled, setDisabled] = useState(true);
const [errors, setErrors] = useState({username: '',password: ''})

const setFormErrors = (name, value) =>{
    yup.reach(schema, name).validate(value)
        .then(()=> setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}

const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormErrors(name, value)
    setRegistration({...registration, [name]: value})
  };

useEffect(()=>{
    schema.isValid(registration).then(valid => setDisabled(!valid))
},[registration])
    return (
        <RegBox>
            <RegForm>
                <h1>Register</h1>
            <input
            type="text"
            name="username"
            onChange={onChange}
            value={registration.username}
            placeholder="Username"
            maxLength="30"
          />
          <input
            type="text"
            name="password"
            onChange={onChange}
            value={registration.password}
            placeholder="Password"
            maxLength="30"
          />
          <div style={{color: '#B61118',fontWeight: 'bold'}}>
              <div>{errors.username}</div>
              <div>{errors.password}</div>
              </div>
          <button disabled={disabled}>Create Account</button>
          <a href='#'>Back to Login</a>
            </RegForm>
        </RegBox>
    )
}
