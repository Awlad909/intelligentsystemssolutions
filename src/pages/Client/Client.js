import React from 'react';
import './Client.css';

const Client = ({client}) => {
    const{image} = client;
    return (
        <div className='Client'>
            <img style={{width:'100px'}} src={image} alt="" />
        </div>
    );
};

export default Client;