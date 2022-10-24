import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [lcreds, setLcreds] = useState({ fname: "", email: "", password: "", cpassword: "" })

    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/auth/createuser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name : lcreds.fname, email: lcreds.email, password: lcreds.password})
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('auth-token', json.authtoken);
            navigate({pathname: "/"});
        }
        else{
            alert(json.error)
        }

    }

    const onChange = (e) => {
        setLcreds({...lcreds, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fname" name='fname' onChange={onChange} value={lcreds.fname} aria-describedby="emailHelp" required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={lcreds.email} aria-describedby="emailHelp" required  />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={lcreds.password} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} value={lcreds.cpassword} required minLength={5} />
                </div>
                <button disabled = {lcreds.password !== lcreds.cpassword} type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
