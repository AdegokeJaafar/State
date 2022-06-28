/* eslint-disable no-unused-expressions */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import id from 'uuid/v4';


  const reducer = (state, action) => {
    if (action.type === GRUDGE_ADD) {
        return [, action.payload, ...state]
    }
    return state;
}

  const Application = () => {
      const [grudges, dispatch] = useReducer(reducer,initialState)

      const addGrudge = ({ person, reason }) => {
          dispatch({
              type: GRUDGE_ADD,
              payload: {
                  person,
                  reason,
                  forgiven: false,
                  id: id()
              }
          });
      };
      [dispatch]
  }