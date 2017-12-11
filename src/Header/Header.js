import React, { Component } from 'react'
import './Header.css'
import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.name ? `Hello ${this.props.name}` : "Welcome"}</h1>
            </div>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string
}

export default Header
