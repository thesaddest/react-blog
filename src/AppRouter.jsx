import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes, privateRoutes} from './router/routes';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './context';
import Loader from './components/UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to='/posts'/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to='/login'/>}/>
            </Routes>)
};

export default AppRouter;