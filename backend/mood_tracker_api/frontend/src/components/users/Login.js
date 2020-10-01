import React, { Component } from "react";
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
      <div>
        <div>
          {/* -----grid 1----- */}
          <div className="grid-item1">
            <h1 className="brandtext"> App Name</h1>
          </div>
          {/* -----grid 2----- */}
          <div className="grid-item2">
            <h2 className="titletext">Login</h2>
            <form onSubmit={this.onSubmit}>
              {/* start of form-container */}
              <div className="form-container">
                {/* start of input container */}
                <div className="input-container">
                  {/* input username  */}
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

                  {/* input password */}
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
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
                {/* end of input container */}
              </div>
              {/* end of form container */}
            </form>
          </div>
          <div className="grid-item3">
            <img />
          </div>
          {/* -----end of grid 2----- */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
