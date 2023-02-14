import React, { Component } from 'react' ;
// Message Component dung de hien thi thong bao
export function Message(props)
{
    if (props.isLoggedIn)
        return <h1>Welcome Back!!!</h1>;
    else
        return <h1>Please Login First!!!</h1>;    
} 


// Login Component
export function Login(props)
{
    return(
        <button onClick = {props.clickInfo}> Login</button>
    );
}

