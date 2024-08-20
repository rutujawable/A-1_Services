import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Category from './views/Category/Category'
import Service from './views/Service/Service'
import ServiceProvider from './views/SeviceProvider/ServiceProvider'
import SlotBooking from './views/SlotBooking/SlotBooking'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home/>
},{
  path: '/category',
  element: <Category/>
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
}


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


