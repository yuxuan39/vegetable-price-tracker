import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { changePage, setState } = this.props
    return (
      <div id='nav'>
        <div id='price'>
          <h2>根據價格排序</h2>
          <a href onClick={e => setState({ filter_condition: 'sort'})}>低至高</a>
        </div>
        <div id='area'>
          <h2>根據地區排序</h2>
          <p onClick={e => setState({ filter_condition: 'location', location: '台北市場' })}>台北市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '宜蘭市' })}>宜蘭市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '台中市' })}>台中市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '嘉義市' })}>嘉義市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '南投市' })}>南投市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '屏東市' })}>屏東市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '高雄市' })}>高雄市</p>
          <p onClick={e => setState({ filter_condition: 'location', location: '花蓮市' })}>花蓮市</p>
        </div>
      </div>
    )
  }
}


export default Header
