import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom'
import './css/login.css'


//set initial form values with an empty string.
const initialLoginFormValues = {
    userName: "",
    password: "",
}

//set the button disable true (boolean) at initial stage
const intialButtonDisabled = true;

export default function Login (props) {
    const {values, submit, change, disabled, errors} = props;

    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
    const [buttonDisabled, setButtonDisabled] = useState(intialButtonDisabled)
    return (
        <div className="loginBody">
            <div className="login">
                <div container>
                    <div className="title">
                        <h1> Grandma's Reciepes</h1>
                    </div>
                    <div className="loginForm">
                        <form>
                            <label>
                                Username
                                <input 
                                    value={values}
                                    type="text"
                                    name=""
                                    onChange=""
                                />
                            </label>
                            <label>
                                Password
                                <input
                                    value={values}
                                    type="text"
                                    name=""
                                    onChange=""
                                />
                            </label>
                            <button>Log in</button>  
                        </form>
                        <div className="registeration-link">
                            Not a member yet? Please register
                            {/* <Link to={'/registeration'}> */}
                                <span> here</span>
                            {/* </Link> */}
                        </div>
                    {/* </StyledLogInForm> */}
                    </div>
                </div>
            </div>
        </div>
    )
}