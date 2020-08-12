import { GET_FILMS, SAVE_FILMS } from './action'


export default function reducer(store, action) {

    if (action.type === SAVE_FILMS) {
        return {
            ...store,
            compareFilms: [...store.compareFilms, action.payload]
        }
    }

    if (action.type === GET_FILMS) {
        return {
            ...store,
            ...action.payload
        }
    }

    return store;
}
