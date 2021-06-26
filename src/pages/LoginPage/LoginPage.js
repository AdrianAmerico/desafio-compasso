import React from 'react';
import { githubProvider } from '../../config/authMethod';
import githubAuth from '../../service/auth';

function LoginPage() {

    const handleOnClick = async (provider) => {
        const res = await githubAuth(provider)
        console.log(res)
        console.log(res.displayName)
        console.log(res.photoURL)
    }

    return (
        <div className="LoginPage">
            <button onClick={() => handleOnClick(githubProvider)}>Github</button>
        </div>
    );
}

export default LoginPage;