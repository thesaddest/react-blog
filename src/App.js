import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import {AuthContext} from './context';


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
