import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
    return (
        <div>Home of resume-parser, 
            <nav>
                <Link to="/">
                    <button>Go to Home</button>
                </Link>
                or
                <Link to="/Register">
                    <button>Sign up</button>
                </Link>
            </nav>
        </div>
    );
}

export default Home;