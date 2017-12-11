import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './History.css'

class History extends Component {
    render() {
        return (
            <div className="history">
                <h3>History</h3>
                {this.props.history.map((item, key) => <div key={`item-${key}`}>{JSON.stringify(item)}</div>)}
            </div>
        )
    }
}

History.propTypes = {
    history: PropTypes.array.isRequired
}

export default History
