/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer, useCallback } from 'react';

import Grudges from './Grudges'
import NewGrudge from './NewGrudge';
import { GrudgeContext } from './GrudgeContext';

const useUndoReducer = (reducer, initialState) => {
    const undoState = {
        past: [],
        present: initialState,
        future: []
    };
}

export default Application
const Application = () => {
    const { undo, isPast, redo, isFuture } = useContext(GrudgeContext);

    console.log({ undo, isPast });

const Application = () => {
    const { undo, isPast } = useContext(GrudgeContext);
    return (
        <div className='Application'>
            <NewGrudge />
            <section>
                <button disable={!isPast} onClick={undo} className='full-width'>
                    Undo
                </button>
                <button disabled={!isFuture} className='full-width'>Redo</button>
            </section>
            <Grudges />
        </div>
    )
}
};