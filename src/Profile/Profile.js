import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Profile.css'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                firstName: "",
                lastName: "",
                startDate: ""
            }
        }
    }

    onBlur = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    onClick = () => {
        this.props.onClick({ data: this.state.data })
    }

    render() {
        return (
            <div className="profile">
                <h3>Profile</h3>
                <label>First Name:</label><input name="firstName" type="text" onBlur={this.onBlur} /><br />
                <label>Last Name:</label><input name="lastName" type="text" onBlur={this.onBlur} /><br />
                <label>Start Date:</label><input name="startDate" type="text" onBlur={this.onBlur} /><br />
                <input type="button" value="Save" onClick={this.onClick} />
            </div>
        )
    }
}

Profile.propTypes = {
    store: PropTypes.object.isRequired
}

export default Profile
