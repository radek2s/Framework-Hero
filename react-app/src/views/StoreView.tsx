import * as React from 'react';
import Highlight from 'react-highlight'


interface Props { };
interface State { };

export default class StoreView extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <h1>From Flux to React Redux concept</h1>

                <p>
                    Developers of the React on the beginning of that framework  presented the concept called "Flux".
                    The idea of Flux was to replace the classic MVC model of designing a applications to provide a
                    "Store" concept that will just hold the application state. Now the Flux is only in maintenance
                    mode but the more sophisticated alternatives has born and we can use them right now. For this
                    project I will focus on the Redux example.
                </p>

                <p>
                    Redux is a pattern and library for managing and updating application state by using "actions". 
                    React Redux is an official React UI binding layer that allows our components to read
                    data directly from the Redux store. On the other hand we can dispatch actions that
                    will update the store state. It is very similar concept that is available in Vue.js
                    library called Vuex.
                </p>

                <p>
                    To start working with Redux we must install the <code>redux</code> package. This is nothing
                    more than executing the following command <code>npx install react-redux</code>. More detailed
                    information how to do it you can find in the <a href="https://redux.js.org/introduction/installation">official documentation.</a>
                </p>

                <p>
                    After installation we can move to attaching this library to our project. React Redux includes
                    a <code>Provider</code> component that allow us to use the Redux store in our application.
                    So we just need to create the entry point like in the example below.
                </p>

                <Highlight className="javascript">
                    {`...
import { Provider } from 'react-redux';
import store from './store';
...

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
`}
                </Highlight>

                <h2>Store state and Actions</h2>

                <p>
                    Basic purpose of the store is to hold the state of the application. After installation
                    and attaching the library to our project we can create a Redux State Slice that will hold 
                    our basket items. The state slice requires a name that will be unique for this slice. In 
                    the <code>initialState</code> object we can define the initial value and in the <code>reducer</code>
                    function we can define the logic to change the state. 
                </p>

                

                <Highlight className="javascript">
                    {`import { createSlice } form '@reduxjs/toolkit';

export const basket = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    }
    reducer: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    },
});
export const { addItem } = basket.actions;
export default basket.reducer;
`}
                </Highlight>

                <p>
                    When our slice is ready we can add it to our Redux store by adding the <code>basketReducer</code>
                    to the <code>reducers</code> object. 
                </p>

                <Highlight className="javascript">
                    {`import { configureStore } form '@reduxjs/toolkit';
import basketReducer from './features/basket';

export default configureStore({
    reducer: {
        basket: basketReducer,
    },
});
`}
                </Highlight>

                <p>
                    Having this Slice configured we can use it in our code. To read data from 
                    store we use this <code>useSelector</code> function that will return the 
                    basket items array. But to add new item to this array we must dispatch an action 
                    using <code>useDispatch()</code> method. In React we can create an additional 
                    constant that will be a shortcut to the <code>Redux</code> objects.
                </p>

                <Highlight className="javascript">
                    {`import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './features/basket'

export function BookItem() {
    const items = useSelector(state => state.basket.items);
    const dispatch = useDispatch();

    addBook() {
        dispatch(addItem(new Book()));
    }

    ...
}`}

                </Highlight>

                <p>
                    This is a basic example of Redux. More details can be found in the 
                    <a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts">official documentation</a>.
                    Also when I will learn more about Redux I will show you how to use it in React in more detail.
                    But now it is a simple example how to achieve the same functionality in Redux and Vuex.
                </p>

    







                

                



            </div>
        );
    }
}