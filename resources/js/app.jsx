import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';

// import {NavigationComponent} from './components/NavigationComponent';

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationComponent name={data.name} age={data.age} />);


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function MyApp() {
    return (
        <div>
            Hello
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/react" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/react" element={<Home /> } />
                <Route path="/react/about" element={<About /> } />
                <Route path="/react/contact" element={<Contact /> } />
            </Routes>
        </div>
            
    );
}

const domNode = document.getElementById('app');
if (domNode) {
    const root = createRoot(domNode);
    root.render(<BrowserRouter>
                <MyApp />
    </BrowserRouter>);
        }