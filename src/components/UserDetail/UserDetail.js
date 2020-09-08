import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const UserDetail = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>  setUser(data))
    },[]);
    return (
        <div>
            <h1>User details {userId}</h1>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetail;