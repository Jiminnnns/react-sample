import React from 'react'
import './Card2.scss'

export default function Card2({title, children}){
    return (
        <div className="Card2">
            <header><h1>{title}</h1></header>
            <div className="content">{children}</div>
        </div>
    )
}