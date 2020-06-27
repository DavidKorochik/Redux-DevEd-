import {createStore} from 'redux';

// STORE -> GLOBILIZED STATE

// ACTION INCREMENT
const increment = () => ({
    type: 'INCREMENT'
});

//ACTION DECREMENT
const decrement = () => ({
    type: 'DECREMENT'
});

//REDUCER
const coutner = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
};

// CREATING STORE
let store = createStore(counter);

// DISPLAY IT IN THE CONSOLE
store.subscribe = (() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());