import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TeacherLogin extends Component {
    state = {
        email: "",
        password: "",
        access: true,
        errorMessage: "",
    }
    handleName = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        const emailid = localStorage.getItem('email')
        const passwordfromstorage = localStorage.getItem('password')
        const { email, password } = this.state
        if (email === emailid && password === passwordfromstorage) {
            this.setState({ access: true, errorMessage: "" })
        } else {
            this.setState({ access: false, errorMessage: "Invalid email or password" })
        }
    }
    render() {
        const emailid = localStorage.getItem('email')
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Enter your email here' onChange={this.handleName}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' placeholder='Enter your password here' onChange={this.handlePassword}></input>
                    </div>
                    <Link to="/teacherview"><button>Login</button></Link>
                    {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                    {!emailid && <p>No user registered with this email address</p>}
                </form>
            </>
        );
    }
}

export default TeacherLogin;
