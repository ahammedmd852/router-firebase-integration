import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                {
                    user.uid
                        ?
                        <button>Sign Out</button>
                        :
                        <Link to="/login">Log In</Link>
                }
            </nav>
        </div>
    );
};

export default Header;