import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This Is Home</h2>
            <p>Current User: {user ? user.displayName : "No user"}</p>
        </div>
    );
};

export default Home;