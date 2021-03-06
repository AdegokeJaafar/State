/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{ useReducer, createContext, useCallback} from 'react';
// import id from './v4';


export const GrudgeContext = createContext();
export const GrudgeProvider = ({ children });

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

const reducer = (grudge = defaultState, action) => {
    if (action.type === GRUDGE_ADD) {
        const newPresent = [
            {
                id: id(),
                ...action.payload
            },
                ...state.present
            ]
            return {
                past: [state.present, ...state.past],
                present: newPresent,
                future: []
            };
        }
    
    if (action.type === 'REDO') {
        const [newPresent, ...newFuture] = state.future;
        return {
            past: [state.present, ...state.past],
            present: newPresent,
            future: newFuture
        };
    }
   

    if (action.type === 'UNDO') {
        const [newPresent, ...newPast] = state.past;
        return {
            past: newPast,
            present: newPresent,
            future: [...state.present, ...state.future] 
        }
    }

    return state;
};

    if (action.type === GRUDGE_FORGIVE) {
        const newPresent = state.present.map(grudge => {
            if (grudge.id !== action.payload.id){
            return { ...grudge, forgive: !grudge.forgiven };
            }
            return grudge;
        });
        

    };

const defaultState = {
    past: [],
    present: initialState,
    future: []
};

    const [state, dispatch] = useReducer(reducer, defaultState)
    const grudges = state.present;
    const isPast = !!state.past.length;
    const isFuture = !!state.future.length;


    const addGrudge = useCallback(
        ({ person, reason }) => {
            dispatch({

            })
        }
    )
    



// if (action.type === 'UNDO') {
//     console.log('WE ARE GOING TO UNDO!'); 
// }







// const defaultState = {
//     past: [],
//     present: initialState,
//     future: []
// };

    export const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultState);
        const grudges = state.present;
        const isPast = !!state.past.length;
        const isFuture = !!state.future.length;
    
        const addGrudge = useCallback(
        ({ person, reason }) => {
            dispatch({
                type: GRUDGE_ADD,
                payload: {
                    person,
                    reason
                }
            });
        },
        [dispatch]
    );

    const toggleForgiveness = useCallback(
        id => {
            dispatch({
                type: GRUDGE_FORGIVE,
                payload: { id }
            });
        },
        [dispatch]
    );

        const undo = useCallback(() => {
            dispatch({ type: 'UNDO' });
        }, [dispatchEvent]);
    
        const redo = useCallback(() => {
            dispatch({ type: 'REDO' });
        }, [dispatchEvent]);

        
    
    return (
        <GrudgeContext.Provider 
            value={{ 
                grudges, 
                addGrudge, 
                toggleForgiveness, 
                undo,
                redo, 
                isPast, 
                isFuture
            }}
        >
            {children}
        </GrudgeContext.Provider>
    );
}