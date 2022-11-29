import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blog from '../Pages/Blog/Blog'
import NotFound from '../Pages/NotFound/NotFound';
import Category from '../Pages/Home/Categories/Category';


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                // loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
           
        ]
    }
])

export default router;