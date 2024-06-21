import React from 'react'
import './header.css'
export function Header({title}){
    return(
        <>
            <h2 style={{
                color:'transparent',
                '-webkit-text-stroke':'2px white',
                fontSize: 64,
                position:'absolute',
            }}>{title}</h2>
            <h2 style={{
                color:'white',
                fontSize: 64,
                position:'absolute',
                animation: 'animate 4s ease-in-out infinite',
            }}>{title}</h2>
        </>
    )
}