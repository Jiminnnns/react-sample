import React from 'react'
import './Card1.css'

export default function Card1({title, children}){
    return (
        <div className="Card1">
            <header><h1>{title}</h1></header>
            <div className="content">{children}</div>
        </div>
    )
}