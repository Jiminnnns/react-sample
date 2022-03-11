import React from 'react'

export default class Greeting extends React.Component {
    render(){
        return(
            //최상위 노드는 한개만 있어야 한다
            //Javascript의 class=> className / for => htmlFor
            //attribute는 camel case로
            <div>Hello!! {this.props.userName} </div>
        )
    }
}