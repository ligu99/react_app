import React from 'react'

export default function Deatial2(props) {
    const {id} = props.location.query
    console.log(props);
    return (
        <div>
            <h1>deatial2:{id}</h1>
        </div>
    )
}
