import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Services from '../pages/Home/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from '../pages/AddService/AddService';
import Allservices from '../pages/Allservices/Allservices';
// import Home from '../../Home/Home';
// import Login from '../../Login/Login';
import MyReview from '../pages/MyReview/MyReview';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Servicedetail from '../pages/Allservices/ServiceDetail/Servicedetail';
import Login from '../pages/Login/Login';
// import Services from '../../Home/Services/Services';
import Signup from '../pages/Signup/Signup';
import Appointments from '../pages/Appoinments/Appointments';

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
                element: <PrivateRoute><Allservices/></PrivateRoute>,
                loader: async()=> {
                    return fetch('https://dentop-server.vercel.app/allservices')
                }

            },
            {
                path: '/service/:name',
                element: <Servicedetail></Servicedetail>,
                loader:  ({params})=>  fetch(`https://dentop-server.vercel.app/services/${params.name}`),
                

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/appointment',
                element: <Appointments></Appointments>
            }
        ]
       }
])

export default routes