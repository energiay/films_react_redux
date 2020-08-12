import React, { useEffect } from 'react'
import Classes from './ListFilms.module.css'

export default function ListFilms(props) {

    console.log(props);

    useEffect(() => {
        props.onMount()
    }, [])

    const hendkeAddFavorite = (id) => {
        props.saveFilm(id)
    }

    const style = {opacity: '0'}

    let isShowBtnCompare = false;
    if (props.compareFilms.length > 1) {
        isShowBtnCompare = true;
    }

    return (
        <div>
            {
                isShowBtnCompare
                ? <button>Сравнить</button>
                : null
            }
            {
                props.films && props.films.map( (film, index) => {
                        return (
                            <div key={index} className={Classes.ListFilms}>
                                {
                                    props.compareFilms.find((elem, index) => {
                                        return elem === film.id
                                    }) 
                                        ? <button style={style}>add</button>
                                        : <button onClick={ () => {hendkeAddFavorite(film.id)} }>add</button> 
                                }
                                
                                <span className={Classes.date}>
                                    {film.release_date}
                                </span>
                                <span>{film.original_title}</span>
                            </div>
                        )
                    })
            }
        </div>
    )
}
