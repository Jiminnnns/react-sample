import React from 'react'
// import ClickCounter from './ClickCounter'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

export default class App extends React.Component{
//   <Layout>
//   <h1>Layout #1</h1>
//   <p>Layout #2</p>
// </Layout>
  render() {
    return (
      <>
        <Card1 title="CSS">CSS Style로 작성</Card1>
        <Card2 title="SCSS">SCSS Style로 작성</Card2>
        <Card3 title="CSS Module">CSS Module로 작성</Card3>
        <Card4 title="CSS in JS">CSS in JS로 작성</Card4>
        {/* <ClickCounter /> */}
      </>
    )
  }
  
}


