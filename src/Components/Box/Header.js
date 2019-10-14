import React from 'react'

export default function Header(props) {
    const welcomeDivStyle = { 
        background:props.color, 
        boxShadow: '4px 4px 4px rgba(0,0,0,0.25)',
        marginLeft:10,
        marginRight:10,
        padding:'1.2em'
        }

    return (
        <div style ={welcomeDivStyle}>
            {props.content}
        </div>
    )
}
