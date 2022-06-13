import React from 'react';
import './index.css'

const Todo = ({details}) => {
    return (
        <div className='todo-container'>
            <p className='todo'>{details.line1}</p>
            <p className='todo'>{details.line2}</p>
            <p className='todo'>{details.city}</p>
            <p className='todo'>{details.state}</p>
            <p className='todo'>{details.zipcode}</p>
            <p className='todo'>{details.country}</p>
            <p className='todo'>{details.dateofbirth}</p>
            <p className='todo'>{details.last4}</p>
            <p className='todo'>{details.license}</p>
            <p className='todo'>{details.passport}</p>
            <p className='todo'>{details.issuedId}</p>
        </div>
    );
};

export default Todo;