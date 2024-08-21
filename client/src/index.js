import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Service from './views/Service/Service'
import ServiceProvider from './views/SeviceProvider/ServiceProvider'
import SlotBooking from './views/SlotBooking/SlotBooking'
import SP_Signup from './views/SP_Signup/SP_Signup'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Home/>
},
{
  path: '/login',
  element: <Login/>
},
{
  path: '/service',
  element: <Service/>
},
{
  path: '/serviceprovider',
  element: <ServiceProvider/>
},
{
  path: '/slotbooking',
  element: <SlotBooking/>
},
{
  path: '/signup',
  element: <Signup/>
},
{
  path: '/spsignup',
  element: <SP_Signup/>
}
// {
//   path: '/splogin',
//   element: <SP_Login/>
// },
// {
//   path: '/spprofile',
//   element: <SP_Profile/>
// }


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


