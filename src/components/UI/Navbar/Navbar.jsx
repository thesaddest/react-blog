import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import '../../../styles/App.css'
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div>
            <ul>
                <li>
                    <Link className={classes.a} to="/about">About a site
                        <span></span><span></span><span></span><span></span>
                    </Link>
                </li>
                <li>
                    <Link className={classes.a} to="/posts">Posts
                        <span></span><span></span><span></span><span></span>
                    </Link>
                </li>
                <li>
                    <button className={classes.a} onClick={logout}>Logout
                        <span></span><span></span><span></span><span></span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;