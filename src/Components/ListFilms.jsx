import React from 'react'

export default function ListFilms(props) {
    console.log(props);

    // useEffect(() => {
    //     props.onMount({test1: 'zhora1'})
    // }, [])

    return (
        <div>
            <button onClick={props.onMount}>update</button>
        </div>
    )
}
