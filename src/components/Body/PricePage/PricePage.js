import React from 'react'
import fetchPrice from '../../../fetch/fetchPrice'

class PricePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainData: []
        }
    }

    componentDidMount() {
        this.fetch()
    }

    formatData(raw_data) {
        return raw_data.map(item => { 
            const obj = {
                name: item['作物名稱'],
                price: item['平均價']
            }
            return obj
        })
    }

    // return format raw_data

    //array.map array.filter

    fetch() {
        fetchPrice().then(data => {
            const formated_data = this.formatData(data)
            this.setState({ mainData: formated_data })

        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.mainData.map((item, idx) => (
                            <li key={idx}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default PricePage
