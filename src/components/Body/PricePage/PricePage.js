import React from 'react'
import fetchPrice from '../../../fetch/fetchPrice'

class PricePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainData: [],
        }
    }

    componentDidMount() {
        this.fetch()
    }


    formatData(raw_data) {
        return raw_data.map(item => {
            const obj = {
                name: item['作物名稱'],
                market: item['市場名稱'],
                price: Number(item['平均價'])
            }
            return obj

        })
    }

    filterLocation(locate = '台北市場') {
        return this.state.mainData.filter(obj => obj['market'] === locate)
    }

    sortData(data, order = 'dec') {
        let sorted_data = null
        if(order === 'dec') {
            sorted_data = data.sort((a, b) => {
                return b['price'] - a['price']
            })
        } else {
            sorted_data = data.sort((a, b) => {
                return a['price'] - b['price']
            })
        }
        return sorted_data
    }

    fetch() {
        fetchPrice().then(data => {
            const formated_data = this.formatData(data)
            this.setState({ mainData: formated_data })

        }).catch(err => console.log(err))
    }

    render() {
        const { filter_condition, location } = this.props
        let displayData = null
        if(filter_condition === 'sort') {
            displayData = this.sortData(this.state.mainData, 'inc')
        } else if (filter_condition === 'location') {
            displayData = this.sortData(this.filterLocation(location), 'inc')
        } else {
            displayData = this.sortData('inc')
        }

        return (
            <div id='table_container'>
                <table>
                    <tr id='content_title'>
                            <th>菜名</th>
                            <th>市場位置</th>
                            <th>平均價 (元/公斤)</th>
                    </tr>
                    {
                        displayData.map((item, idx) => (
                            <tr id='content' key={idx}>
                                <th>{item.name}</th>
                                <th>{item.market}</th>
                                <th>{item.price}</th>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default PricePage
