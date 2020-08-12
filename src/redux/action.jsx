export const GET_FILMS = 'GET_FILMS'
export const SAVE_FILMS = 'SAVE_FILMS'


export const getFilms = (payload) => {
    return {
        type: GET_FILMS,
        payload 
    }
}

export const saveFilm = (payload) => {
    return {
        type: SAVE_FILMS,
        payload 
    }
}