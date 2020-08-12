import { connect } from 'react-redux';
import ListFilms from './ListFilms';
import { getFilms, saveFilm } from './../redux/action'
import Service from './../Service/index'


const mapStoreToProps = (store) => {
    return { ...store }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            Service().then((response) => {
                dispatch( getFilms({films: response.data.results}) )
            });
        },
        saveFilm: (id) => {
            dispatch( saveFilm(id) );
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ListFilms);