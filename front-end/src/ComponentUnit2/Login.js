import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import * as yup from 'yup';
import './css/login.css';
import Footer from '../ComponentUnit3/Footer';
import Header from '../ComponentUnit3/Header';

//set initial form values with an empty string.
const initialLoginFormValues = {
    userName: "",
    password: "",
}

//set the button disable true (boolean) at initial stage
const intialButtonDisabled = true;

//set the initial form errors with an empty string.
const initialFormErrors = {
    userName: "",
    password: "",
}

const apiUrl = "https://node-buildwk-cookbook.herokuapp.com/api/auth/login"

const formSchema = yup.object().shape({
    userName: yup.string().required("username is required"),
    password: yup.string().required("password is required in order to login"),
})
export default function Login () {

    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
    const [buttonDisabled, setButtonDisabled] = useState(intialButtonDisabled)
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const onChange = ((event) => {
        const {name, value} = event.target;
        setLoginFormValues(name, value);
    })
    
    //setting up login input values to actual values.
    const onLogin = ((event => {
        event.preventDefault();
        const user = {
            userName: loginFormValues.userName,
            password: loginFormValues.password,
        }
        //sending login information (username and password) to the api.
        axios
         .post(apiUrl, user)
         .then((response) => {
            console.log (response);
         })
         .catch((error) => {
             console.log('Username or password is wrong!', error)
         })
         .finally(() => {
             setLoginFormValues(initialLoginFormValues)
         })
    }))

    const setLoginErrors = ((name, value) => {
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(() => {
              setFormErrors({
                  ...formErrors, [name]:"",
              })
          })
          .catch((error) => {
              setFormErrors({
                  ...formErrors, [name]: error.errors[0],
              })
          })
    })

    useEffect(() => {
        formSchema
           .isValid(loginFormValues)
           .then((valid) => {
               setButtonDisabled(!valid)
           }, [loginFormValues, formSchema])
    })

    return (
        <div className="loginBody">
            <div className="login">
                <div container>
                    {/* <div className="title">
                        <h1> Grandma's Recipes</h1>
                    </div> */}
                    <Header />
                    <div className="errors">
                        <div>{formErrors.userName}</div>
                        <div>{formErrors.password}</div>
                    </div>
                    <div className="loginForm" onSubmit={onLogin}>
                        <form>
                            <label>
                                Username
                                <input 
                                    value={setLoginFormValues.userName}
                                    type="text"
                                    name="username"
                                    onChange={onChange}
                                    errors={setLoginErrors}
                                />
                            </label>
                            <label>
                                Password
                                <input
                                    value={setLoginFormValues.password}
                                    type="text"
                                    name="password"
                                    onChange={onChange}
                                    errors={setLoginErrors}
                                />
                            </label>
                            <button disabled={buttonDisabled}>Log in</button>  
                        </form>
                        <div className="registeration-link">
                            Not a member yet? Please register
                            <Link to={'/register'}>
                                <span> here</span>
                            </Link>
                        </div>
                    {/* </StyledLogInForm> */}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}