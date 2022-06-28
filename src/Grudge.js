/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { GrudgeContext } from './GrudgeContext'

export default Grudge
const Grudge = React.memo(({ grudge }) => {
    const { toggleFogiveness } = React.useContext(GrudgeContext())

    const forgive = () => onForgive(grudge.id);

    console.log('Rendering Grudge', grudge.id);

    return (
        <article className='Grudge'>
            <h3>{grudge.person}</h3>
            <p>{grudge.reason}</p>
            <div className='Grudge-controls'>
                <label className='Grudge-forgiven'>
                    <input type="checkbox" checked={grudge.forgiven} />
                    Forgiven
                </label>
            </div>
        </article>
    )
})