import {createStore} from 'redux'
import {reducerList} from './reducers/reducer'


export const store=createStore(reducerList,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())