import React from 'react';
import { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setFriends(data))
    },[]);
    
    return (
        <div>
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(user => <Friend user={user}></Friend>)
            }
        </div>
    );
};

export default Home;