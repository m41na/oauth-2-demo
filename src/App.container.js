import React, { useState } from 'react';
import App from './App';
import requests from './requests';

export default function () {
    const [loginFormContext, setLoginFormContext] = useState({
        email: '',
        password: '',
    });

    const serverUrl = 'http://localhost:3030/';

    const handleLoginChange = (e) => {
        console.log(e.target.id, e.target.value)
        setLoginFormContext({...loginFormContext, [e.target.id]: e.target.value})
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('submit', e);
        requests('post', serverUrl, {
            data: { ...loginFormContext},
            onOk: (e) => {
                if(e.status === 200){
                    console.log(e)
                }
            },
            onErr: (e) => {
                console.log(e)
            }
        })
    }

    const props = {
        loginForm: loginFormContext,
        handleLoginChange,
        handleSignIn,
    };

    return <App {...props} />
}