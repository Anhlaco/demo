import React from "react"; import {
    BrowserRouter as Router,
    Switch,
    Route, Link
    } from "react-router-dom";
    // Trong vi du nay bao gom 3 pages ung voi 3 function-based components export default function BasicExample() { return (
    <Router>
    <div>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    <li>
    <Link to="/seafood">SeaFood</Link>
    </li>
    <li>
    <Link to="/food">Food</Link>
    </li>
    
    