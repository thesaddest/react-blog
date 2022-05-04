import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import './pagesStyles/Login.css';
import '../styles/InputAndLabelStyles.scss';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div className='mainContainer'>
            <h1>Login Page</h1>
            <div className='container'>
                <form onSubmit={login}>
                    <div className='form'>
                        <MyInput type="text" id="email"/>
                        <label htmlFor='email' className='formLabel'>Email</label>
                    </div>
                    <div className="form">
                        <MyInput type="password" id='password'/>
                        <label htmlFor='password' className='formLabel'>Password</label>
                    </div>
                    <MyButton className='loginBtn'>Login</MyButton>
                </form>
                <div className='textContainer'>
                    <p>
                        Actually, my developer <br/>
                        has not added a backend yet,<br/>
                        but you can enter whatever your heart desires.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;