import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <Link to="About">About</Link>
            <Link to="Contact">Contact</Link>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <a href="/">Home</a>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
            <a href="/">Home</a>
        </div>
    );
}

export function NotFount404() {
    let location = useLocation();
    return(
        <div>
            <h1>
                404 Page not found at {location.pathname}
            </h1>
        </div>
    );
}