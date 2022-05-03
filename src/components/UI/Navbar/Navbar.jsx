import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.container}>
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
        // <div className={classes.navbar}>
        //     <MyButton onClick={logout}\>Logout</MyButton>
        //     <div className={classes.navbar__links}>
        //         <Link className={classes.navbar__link} to="/about">About a site</Link>
        //     </div>
        //     <div className={classes.navbar__links}>
        //         <Link className={classes.navbar__link} to="/posts">Posts</Link>
        //     </div>
        // </div>
    );
};

export default Navbar;