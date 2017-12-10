import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>{ this.props.firstName? `Hello ${this.props.firstName}`: "Welcome"}</h1>
            </div>
        )
    }
}

Header.propTypes = {
    firstName: PropTypes.string
}

export default Header
