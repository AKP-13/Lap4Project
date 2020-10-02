import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navlist">
                <span className="navwelcome">
                    <strong>{user ? `Welcome, ${user.username}` : ""}</strong>
                </span>
                <li className="navtext">
                    <NavLink className="navlink" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="navtext">
                    <NavLink className="navlink" to="/moodtracker">
                        Mood Tracker
                    </NavLink>
                </li>
                <li className="navtext">
                    <NavLink className="navlink" to="/alljournals">
                        Journal
                    </NavLink>
                </li>
                <li className="navtext">
                    <button id="logoutButton" onClick={this.props.logout}>
                        Logout
                    </button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navguestlist">
                <li className="navtext">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="navtext">
                    <Link to="/login" className="nav-link">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar">
                <div className="container">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
