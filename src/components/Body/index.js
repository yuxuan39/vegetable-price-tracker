import React from 'react'
import PricePage from '../Body/PricePage/PricePage'

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { page, filter_condition, location } = this.props

    const PricePageWithProps = (<PricePage filter_condition={filter_condition} location={location}/>)

// 如果 page 是首頁，就 return PricePage，以此類推
    if (page === '/') {
      return PricePageWithProps
    } else if (page === '/others') {
      return (<div>Others</div>)
    } else {
      return PricePageWithProps
    }
  }
}


export default Body
