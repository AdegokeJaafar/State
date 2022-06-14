/* eslint-disable no-undef */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React, { Component, useEffect  } from 'react';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState');
    if (storage) return JSON.parse(storage).count;
    return { count: 0};
}

const storeStateInLocalStorage = count => {
    localStorage.setItem('counterState', JSON.stringify({ count }))
    console.log(localStorage);
}

const useLocalStorage = (initialState, key) => {
      const get = () => {
          const storage = localStorage.getItem(key);
          console.log(localStorage, storage);
          if (storage) return JSON.parse(storage)[value];
          return initialState;
      }

      const [ value, setValue ] = useState(get());

      useEffect(() => {
          localStorage.setItem(key, JSON.stringify({ value }))
      });

      return [value, setValue];
}



const Counter = ({ max, step })=> {
    const [count, setcount] = useState(getStateFromLocalStorage(0, 'count')); 
}

const increment = () => {
    setCount(c => {
        if (c >= max) return;
    });
};
const decrement = () =>setCount(count - 1);
const reset = () =>  setCount(0);

const storeStateInLocalStorage = () => {
    localStorage.setItem('counterState', JSON.stringify(this.state));
    console.log(localStorage);
}


class Count extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromLocalStorage();
            
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.updateDocumentTitle = this.updateDocumentTitle.bind(this)
    }

    updateDocumentTitle() {
        document.title = this.state.count;
    }





increment() {
    this.setState( 
        (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
        },
        this.updateDocumentTitle,
        () => {
            localStorage.setItem('counterState', JSON.stringify(this.state));
            console.log(localStorage);
        },
    );

    console.log('Before!', this.state); 
}

decrement() {
    this.setState({ count: this.state.count - 1 }, thisupdateDocumentTitle);
}

reset() {
    this.setState({ count: 0 }, this.updateDocumentTitle);
}

render() {
    const { count } = this.state
}
}
