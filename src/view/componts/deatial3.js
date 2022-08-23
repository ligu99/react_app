import React from 'react'

export default function Deatial3(props) {
    const {id,id2} = props.match.params
    console.log(props);
    return (
        <div>
            <h1>多个参数</h1>
            <h2>deatial2:{id}</h2>
            <h2>deatial2:{id2}</h2>
        </div>
    )
}
