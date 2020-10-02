import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import "./Register.css";

export class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({
                passwordsNotMatch: "Passwords do not match",
            });
        } else {
            const newUser = {
                username,
                email,
                password,
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onButtonClick = (e) => {
        alert(
            "To comply with the Data Protection Act 2018 (The U.K.'s implementation of the General Data Protection Regulation (GDPR)), we will provide, in full transparancy, how your data will be recorded and utilised. First and foremost, we are in no way mental health experts or psychiatrists and the tools provided in this application are to be used however the user chooses. Your email address and username will be stored in our database for verification purposes to allow you to login successfully after registering. Your password is securely hashed and not stored in plain text in the database. The 'mood' values that you input are used to calculate the personalised graphs you see on the dashboard page, which take an average of all of your habit inputs to generate the graph data. Your moods are not stored in the database attributed to your name, but a user_id, which removes any association with moods from a username."
        );
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <Fragment>
                <h2 className="titletext">Register</h2>
                {/* start of form */}
                <div className="inputform">
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="input-line1"
                            name="username"
                            onChange={this.onChange}
                            placeholder="Username"
                            value={username}
                            required
                        />
                        <br />

                        <input
                            type="email"
                            className="input-line1"
                            name="email"
                            onChange={this.onChange}
                            placeholder="E-mail"
                            value={email}
                            required
                        />
                        <br />

                        <input
                            type="password"
                            className="input-line1"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={password}
                            required
                        />
                        <br />

                        <input
                            type="password"
                            className="input-line1"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={this.onChange}
                            value={password2}
                            required
                        />
                        <br />

                        <button
                            onClick={this.onButtonClick}
                            className="ghost-round1"
                        >
                            How is my data used?
                        </button>
                        <br />
                        <div className="wrapper4">
                            {/* check box */}

                            <div className="grid-item4">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="data"
                                        value="data"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="grid-item5">
                                <h3 className="subtitle1">
                                    I have read and agreed.
                                </h3>
                            </div>
                        </div>

                        <br />

                        <button type="submit" className="ghost-round2">
                            Register
                        </button>
                        <br />

                        <h5 align="center" className="subtitle2">
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                        </h5>
                    </form>
                    {/* end of form */}
                </div>
                {/* end of input form*/}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
