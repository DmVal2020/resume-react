import React from 'react'
import css from './Block.module.css'

function Block(props) {
    return (
        <div className={css.Block}>
            {props.children}
        </div>
    )
}

export default Block
