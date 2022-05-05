import React from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import '../pages/pagesStyles/About.css'
import '../styles/App.css';

const About = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='headerText'>
                <h1>
                    JSONPlaceholder API App
                </h1>
            </div>
            <article>
                <h1>This app was made with help of a JSONPlaceholder Rest API for practice in React.
                    It uses:</h1>
                <div className='ulContainer'>
                    <ul className='articleUl'>
                        <li>Functional Components only</li>
                        <li>Hooks (useState, useEffect, useRef, useMemo, etc.) and custom Hooks</li>
                        <li>CSS modules, plain CSS, SCSS</li>
                        <li>Axios</li>
                        <li>API</li>
                    </ul>
                </div>
                <h1>With this app you can:</h1>
                <div className='ulContainer'>
                    <ul className='articleUl'>
                        <li>Create, open and delete posts</li>
                        <li>Sort posts</li>
                        <li>Search for a post</li>
                    </ul>
                </div>
                <h1>Additional features:</h1>
                <div className='ulContainer'>
                    <ul className='articleUl'>
                        <li>Reusable components (custom input, popup, select, buttons, etc.)</li>
                        <li>Preloader</li>
                        <li>Infinite scroll</li>
                        <li>Responsive design</li>
                        <li>Animations made from scratch</li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default About;