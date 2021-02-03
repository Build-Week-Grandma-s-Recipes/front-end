import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'; 
import * as yup from 'yup';
import './css/login.css';
import Footer from '../ComponentUnit3/Footer';
import Header from '../ComponentUnit3/Header';
import axiosWithAuth from '../ComponentUnit3/AxiosWithAuth'

  const apiUrl = "https://node-buildwk-cookbook.herokuapp.com/api/auth/login"

  const initialLoginFormValues = {
    username: "",
    password: "",
}
const intialButtonDisabled = true;
const initialFormErrors = {
  username: "",
  password: "",
}
const formSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required in order to login"),
})
 function Login () {

  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
  const [buttonDisabled, setButtonDisabled] = useState(intialButtonDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const onChange = ((event) => {
    //   const {name, value} = event.target;
      setLoginFormValues({...loginFormValues,[event.target.name]:event.target.value});
      console.log(loginFormValues)
  })
  async function onLogin(event){
    event.preventDefault();
    const user = {
        userName: loginFormValues.username,
        password: loginFormValues.password,
    }
    //sending login information (username and password) to the api.
    await axiosWithAuth()
     .post(apiUrl, user)
     .then((response) => {
      localStorage.setItem("username",user.username)
      console.log(".post response", response);
      return localStorage.setItem("token", response.data.token)
      
     })
     .catch((error) => {
         console.log('Username or password is wrong!', error)
     })
     window.location.href="/home"
}
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

  //   // console.log(user)
  //   await axiosWithAuth()
  //     .post(url, user,)
  //     .then((res) => {
  //       localStorage.setItem("username",user.username)
  //       console.log(".post res", res);
  //       return localStorage.setItem("token", res.data.token);
  //     })
      
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   //   window.location.href="/home";
  // };

  

  
  return (
    <div className="loginBody">
        <div className="login">
            <div container>
                {/* <div className="title">
                    <h1> Grandma's Recipes</h1>
                </div> */}
                <Header />
                <div className="errors">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <div className="loginForm">
                    <form onSubmit={onLogin}>
                        <label>
                            Username
                            <input 
                                // value={setLoginFormValues.userName}
                                type="text"
                                name="username"
                                onChange={onChange}
                                errors={setLoginErrors}
                            />
                        </label>
                        <label>
                            Password
                            <input
                                // value={setLoginFormValues.password}
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
export default Login