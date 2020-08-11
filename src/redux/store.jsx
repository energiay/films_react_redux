import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
    test: 'zhora'
}

export default createStore(reducer, initialStore)