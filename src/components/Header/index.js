import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { changePage } = this.props
    return (
      <div>
        <button onClick={e => changePage('/')}>one</button>
        <button onClick={e => changePage('/others')}>two</button>
      </div>
    )
  }
}


export default Header
