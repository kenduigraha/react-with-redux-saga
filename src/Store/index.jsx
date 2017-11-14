import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import rootReducer from '../Reducers';

const customMiddleware = store => next => action => {
    // console.log(store.dispatch)
    console.log(action)
    // if(action.type === 'INCREMENT') {
    //     alert(`Increment button was clicked, current state is ${store.getState()} \nI will now add to it`);
    // }
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    next(action);
}


const middlewares = applyMiddleware(customMiddleware);
const store = createStore(rootReducer, middlewares);

export default store;