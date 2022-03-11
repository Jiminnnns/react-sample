import React, {useState} from 'react'

// export default class ClickCounter extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             clickCount: props.initialClickCount || 0//0
//         }
//     }

//     handleClick=(incrementalCount)=>{
//         this.setState({
//             clickCount: this.state.clickCount+incrementalCount
//         })
//     }

//     handleResetClick=()=>{
//         this.setState({
//             clickCount: 0
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <div>클릭한 횟수: {this.state.clickCount}</div>
//                 <button onClick={() => this.handleClick(1)}>클릭 + 1</button>
//                 <button onClick={() => this.handleClick(10)}>클릭 + 10</button>
//                 <button onClick={this.handleResetClick}>초기화</button>
//             </div>
//         )
//     }
// }

export default function ClickCounter(){
    const [clickCount, setClickCount] = useState(0)

    const handleClick=(inc) =>{
        setClickCount(clickCount + inc)
    }
    const handleResetClick = () =>{
        setClickCount(0)
    }
    return(
        <div>
            <div>클릭한 횟수: {clickCount}</div>
            <button onClick={() => handleClick(1)}>클릭 + 1</button>
            <button onClick={() => handleClick(10)}>클릭 + 10</button>
            <button onClick={handleResetClick}>초기화</button>
        </div>
    )
}