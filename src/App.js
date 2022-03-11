import React from 'react'
import Header from './Header'
import Layout from './Layout'
import ClickCounter from './ClickCounter'

export default class App extends React.Component{
//   <Layout>
//   <h1>Layout #1</h1>
//   <p>Layout #2</p>
// </Layout>
  render() {
    return (
      <>
        <ClickCounter />
      </>
    )
  }
  
}


