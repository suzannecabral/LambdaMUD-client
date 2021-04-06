import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function UserLoginForm() {
    
    const { push } = useHistory();

    const initialUser={
        username:"",
        password:""
    }

    const [userData, setUserData] = useState(initialUser);

    const sendAuth = () => {
        axios
            .post('https://lambda-mud-adventure.herokuapp.com/api/login',userData)
            // .post('http://localhost:8000/api/login/',userData)
            .then(res => {
                console.log('Login successful');
                localStorage.setItem("token",res.data.key);
                // setLoggedIn
                push('/game');
                window.location.reload();
            })
            .catch(err=>{
                console.log('Login error: ', err);
            })
    }

    const handleChange=e=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit = e =>{
        e.preventDefault();
        sendAuth();
        console.log('Logging in...');
    }
    return (
    <div className="UserLoginForm">
        <h2>Login:</h2>
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            </label>
            <label>Password:
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            </label>
            <button type="submit">Log In</button>
        </form>
    </div>  
    );
} 

export default UserLoginForm;
