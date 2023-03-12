import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Registration/index.css'

class StudentRegistration extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        login: true,
        errorMessage: "",
    }

    handleUserName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const existingEmail = localStorage.getItem("email");

        if (existingEmail === email) {
            this.setState({ errorMessage: "Email already exists!" });
        } else {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            this.props.history.push("/studentlogin");
        }
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <h2>Student Registration</h2>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className='studentregistraion-container'>
                        <div>
                            <label htmlFor='name'>UserName</label>
                            <input type="text" name='name' placeholder='Enter your name' onChange={this.handleUserName}></input>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="email" name='email' placeholder='Enter your mail id' onChange={this.handleEmail}></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name='password' placeholder='Choose your password' onChange={this.handlePassword}></input>
                        </div>
                        <button type='submit'>Register here</button>
                        <Link to="/studentlogin">Already have an account?</Link>
                    </div>
                </form>
            </>
        );
    }
}

export default StudentRegistration;
