import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Body from '../../components/Body'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: '/'
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
      <div>
        <Header changePage={this.changePage.bind(this)} page={this.state.page}/>
        <Body page={this.state.page}/>
        <Footer />
      </div>
    )
  }
}

export default App
