import { memo } from "react"
import React  from 'react'

function Child(props) {
    console.log('child');
    return (
        <div>
            <h1>{props.data().name}</h1>
        </div>
    )
}

export default Child
