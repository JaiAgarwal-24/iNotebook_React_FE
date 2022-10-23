import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [creds, setCreds] = useState({email: "", password: ""});

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({email: creds.email, password: creds.password})
        } );
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate({pathname: "/"});

        }
        else{
            alert("invalid credentials")
        }


    }

    const onChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value = {creds.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={creds.password}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
