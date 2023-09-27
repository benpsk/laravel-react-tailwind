import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';

// import {NavigationComponent} from './components/NavigationComponent';

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationComponent name={data.name} age={data.age} />);


import React from 'react';
import {Routes, Route, Link, createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from "./error-page";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {NavigationComponent} from './components/NavigationComponent';

const router = createBrowserRouter([
    {
        path: "/react/home",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/react/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/react/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/react/navigation",
        element: <NavigationComponent />,
    },
    {
        path: "*",
        element: <DefaultComponent />,
    }
]);

function DefaultComponent() {
  return (
    <>
    </>
  );
}

function MyApp() {
    return (
        <div>
            Hello
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/react/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
            
    );
}

const domNode = document.getElementById('reactApp');

console.log(domNode);
if (domNode) {
    const root = createRoot(domNode);
    root.render(<React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>);
}

// const navigationNode = document.getElementById('navigation');
// if (navigationNode) {
//     const navigationRoot = createRoot(navigationNode);
//     navigationRoot.render(
//         <RouterProvider router={router} >
//             <NavigationComponent name={data.name} age={data.age} />
//         </RouterProvider>
    
//     );
// }
        
        