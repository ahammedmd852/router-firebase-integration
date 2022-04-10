import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn } = useFirebase();
    return (
        <div>
            <h2>Please! Log In</h2>
            <div style={{ margin: "15px" }}>
                <button onClick={googleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;