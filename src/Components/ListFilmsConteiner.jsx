import { connect } from 'react-redux';
import ListFilms from './ListFilms';
import { update } from './../redux/action'
import Service from './../Service/index'


const mapStoreToProps = (store) => {
    return { ...store }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (data) => {
            Service().then((response) => {
                dispatch( update({films: response.data.results}) )
            });
            
            
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ListFilms);