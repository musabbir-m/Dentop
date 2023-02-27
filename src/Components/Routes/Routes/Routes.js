import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main';
import Allservices from '../../Allservices/Allservices';
import Home from '../../Home/Home';
import Login from '../../Login/Login';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Servicedetail from '../../ServiceDetail/Servicedetail';
import Services from '../../Services/Services';
import Signup from '../../Signup/Signup';

const routes= createBrowserRouter([
       {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {

                path: '/allservices',
                element: <PrivateRoute><Allservices></Allservices></PrivateRoute>,
                loader: async()=> {
                    return fetch('http://localhost:5000/allservices')
                }

            },
            {
                path: '/dentalservice/:id',
                element: <Servicedetail></Servicedetail>,
                loader: async({params})=>  fetch(`http://localhost:5000/dentalservice/${params.id}`)
                

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
       }
])

export default routes