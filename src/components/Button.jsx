import React from 'react'
import './Button.css'

export default props => {
    let classi ='button'
        classi += props.operation ? ' operation' : ''
        classi += props.double ? ' double' : ''
        classi += props.triple ? ' triple' : '' 

            return(
                <button className={classi} onClick={e => props.click(props.label)}>
                    {props.label}
                </button>
            )
        }