import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id} = props.user;
    const userStyle = {
        border:'1px solid red',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    };
    return (
        <div style={userStyle}>
            <h3>name: {name}</h3>
            <h4>username: {username}</h4>
            <p>id: <Link to={`/user/${id}`}>show user</Link></p>
        </div>
    );
};

export default Friend;