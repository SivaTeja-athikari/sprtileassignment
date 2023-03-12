import React, { Component } from 'react';
import './index.css'
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        }
    }

    handleLogout = () => {
        this.setState({
            logout: true
        });
    }

    render() {
        if (this.state.logout) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <button className='logout-button' onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Logout;
