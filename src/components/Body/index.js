import React from 'react'
import PricePage from '../Body/PricePage/PricePage'

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { page } = this.props

// 如果 page 是首頁，就 return PricePage，以此類推
    if (page === '/') {
      return (<PricePage />)
    } else if (page === '/others') {
      return (<div>Others</div>)
    } else {
      return (<PricePage />)
    }
  }
}


export default Body
