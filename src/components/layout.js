import React from 'react'

export default function Layout(props) {
    return (
        <div>
            <h1>Bright's Blog</h1>
            <ul>
                <li> <a href='/login'>Login</a></li>
                <li> <a href='/register'>Register</a></li>
                <li> <a href='/blog'>Blog</a></li>
            </ul>
            {props.children}
        </div>
    )
}
