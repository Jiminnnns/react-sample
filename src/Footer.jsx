import React from "react";

// export default class Footer extends React.Component{
//     render(){
//         return (
//             <footer>2022.03.11</footer>
//         )
//     }
// 
export default function Footer({now}){
    return(
        <footer>current time: {now.toString()} </footer>
    )
}