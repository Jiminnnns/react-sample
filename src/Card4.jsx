/**@jsxRuntime classic */
/**@jsx jsx */
import {jsx, css} from '@emotion/react'
import React from 'react'

export default function Card4({title, children}){
    return (
        <div 
            css={css`
                margin: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.3;
                max-width: 300px;
            `}
        >
            <header 
                css={css`
                    border-bottom: 1px solid #999;
                    padding: 0.3rem 1rem;
                    font-size: 1.5rem;
                `}
            >
                <h1
                    css={css`
                        margin: 0px;
                    `}
                >{title}</h1>
            </header>
            <div
                css={css`
                    padding: 10px;
                `}
            >
                {children}
            </div>
        </div>
    )
}