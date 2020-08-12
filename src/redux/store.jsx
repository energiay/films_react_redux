import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
    compareFilms: []
}

export default createStore(reducer, initialStore)