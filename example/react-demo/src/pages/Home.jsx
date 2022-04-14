import React from 'react'
const { Component } = React
import { Button } from 'antd'

class Home extends Component {
  render() {
    console.log(<div>发发发</div>)
    return (
      <div>
        vite react <Button type="primary">test</Button>
      </div>
    )
  }
}
export default Home
