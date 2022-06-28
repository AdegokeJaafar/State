/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import Application from './Application';

// import endpoint from './endpoint';
// import './styles.css';

import { GrudgeProvider } from './GrudgeContext';

import isFunction from 'lodash/isFunction';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import endpoint from './endpoint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      characters: [],
      loading: true,
      error: null,
    };
  }
}

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      result: null,
      loading: true,
      error: null,
    }
  }
  
  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      result: action.payload.reponse,
      loading: false,
      error: null,
    }  
  };

  if (action.type === 'ERROR') {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    };
  }


  return state;
};

//  

const fetchCharacters = (dispatch) => {
  dispatch({ type: 'LOADING' });
  fetch(endpoint + '/characters')
    .then(response => response.json())
    .then(response => dispatch({ 
      type: 'RESPONSE_COMPLETE', 
      payload: { characters: response.characters } 
    }),
    ).catch(error => dispatch({ type: 'ERROR', payload: { error: error.characters}}) );
};

// const initialState = {
//   error: null,
//   loading: false,
//   characters: []
// }

const useFetch = url => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);
  


React.useEffect(() => {
  dispatch({ type: 'LOADING' });

  const fetchUrl = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'RESPONSE_COMPLETE', payload: { reponse: data } });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: { error } });
    } 
  };

  const initialState = {
    error: null,
    loading: false,
    characters: [],
  };

  const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const enhancesDispatch = React.useCallback(
      action => {
        console.log(action);

      if (isFunction(action)) {
        action(dispatch)
      } else {
        dispatch(action);
      }

      
    },
    [dispatch],
    );

    return [state, enhancedDispatch];
  };

  const Application = () => {
    const [state, dispatch] = useThunkReducer(reducer, initialState);
    const { characters } = state;

    useEffect(() => {
      dispatch(() => {})
    }, []);

    return (
      <div className="Application">
        <header>
          <h1>Star Wars Characters</h1>
        </header>
        <main>
          <section className="sidebar">
            <button onClick={() => dispatch(fetchCharacters)}>
              Fetch Characters
            </button>
            <CharacterList characters={characters} />
          </section>
          <section className="CharacterView">
            <Route path="/characters/:id" component={CharacterView} />
          </section>
          <section className="CharacterView">
                
          </section>
        </main>
      </div>
    )
  }



// fetch(endpoint + '/characters')
//   .then(reponse => reponse.json())
//   .then(reponse => {
//     setLoading(false);
//     setResponse(response);
//   })
//   .catch(error => {
//     setLoading(false);
//     setError(error);
//   });

}, []);

return [ state.result, state.loading, state.error ];
}; 

const rootElement = document.getElementById('root');

ReactDOM.render(
<GrudgeProvider>
  <Application />
</GrudgeProvider>,
 rootElement
);




// ??? Thunk is a code to be executed later. 
// ??? Thunk is coded manually, it doesn't have any framework, the codes are written from scratch for the function to be executed later.