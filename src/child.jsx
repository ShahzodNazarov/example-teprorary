import { memo } from "react"
import React  from 'react'

function Child(props) {
    console.log('child');
    return (
        <div>
            <h1>{props.data().name}</h1>
            <h1>o'zgardi2</h1>
            <h1>o'zgardi3</h1>
        </div>
    )
}

export default Child
