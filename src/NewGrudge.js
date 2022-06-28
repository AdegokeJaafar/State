/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default NewGrudge
const NewGrudge = React.memo(() => {
    const [person, setPerson] = useState('');
    const [reason, setReason] = useState('');

    const { addGrudge } = React.useContext(GrudgeContext);

    console.log('Rendering New Grudge');

    const handleChange = event => {
        event.preventDefault();
        addGrudge({ person, reason });
    };

    return (
        <form className='NewGrudge' onSubmit={handleChange}>
            <input
                className='NewGrudge-input'
                placeholder='Person'
                type="text"
                value={person}
                onChange={event => setPerson(event.target.value)}
            />

        </form>
    )
})