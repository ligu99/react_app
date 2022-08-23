import React from 'react'

export default function Deatial(props) {
    const {params} = props.match
    console.log(params);
    return (
        <div>一个参数：deatial-id:{params.id}</div>
    )
}
