import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Body from '../../components/Body'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: '/',
      filter_condition: 'sort', // 'sort', 'location'
      location: '台北市場',
    }
  }

  // ChangePage 是用來自動切換頁面
  changePage(whereToGo) {
    this.setState({page: whereToGo})
  }

  // 把 ChangePage 往下傳到 Header，並且綁定 this，這樣在 Header 呼叫時，this.setState 的 this 才會指回來此 function
  // 把 page 往下傳到 Header 跟 Body
  render() {
    return (
      <div id='container'>
        <Header changePage={this.changePage.bind(this)} page={this.state.page} setState={this.setState.bind(this)}/>
        <Body page={this.state.page} filter_condition={this.state.filter_condition} location={this.state.location}/>
      </div>
    )
  }
}

export default App
