import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import "./Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
export class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        const { username, password } = this.state;
        return (
            <Fragment>
                <div>
                    {/* -----grid 1----- */}
                    <div className="wrapper1">
                        <h1 className="brandtext">Mood for Thought</h1>
                    </div>
                    {/* -----grid 2----- */}
                    <div className="wrapper2">
                        {/* -----start grid 2-2 -----*/}
                        <div className="grid-item2">
                            <img src="https://cdn.dribbble.com/users/879147/screenshots/6138805/robin_care_4_4x.jpg?compress=1&resize=800x600"></img>
                        </div>
                        {/*----- end grid 2-2----- */}
                        {/*----- grid 2-1----- */}
                        <div className="grid-item1">
                            <h2 className="titletext">Welcome!</h2>
                            <div className="inputform">
                                <form onSubmit={this.onSubmit}>
                                    <input
                                        type="text"
                                        className="input-line"
                                        name="username"
                                        onChange={this.onChange}
                                        placeholder="Username"
                                        value={username}
                                        required
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        className="input-line"
                                        name="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                        value={password}
                                        required
                                    />
                                    <br />

                                    <button type="submit" class="ghost-round">
                                        Login
                                    </button>

                                    <p className="subtitle">
                                        Don't have an account?{" "}
                                        <Link className="anchor" to="/register">
                                            Register
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        {/*----- end grid 2-1 -----*/}
                    </div>
                    {/* -----end of grid 2----- */}
                    <p className="credittext">
                        Image &copy;{" "}
                        <a href="https://dribbble.com/shots/4953685-Schedule-chat-organize">
                            Berin Holy, Dribble
                        </a>{" "}
                    </p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
