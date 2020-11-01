import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-bootstrap';
import './NavBar.scss';

class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <header className="navbar">
                <NavLink to="/dailyreading" className="header-link header-daily-reading">Daily Reading</NavLink>
                <NavLink to="" className="header-link header-my-journal">My Journal</NavLink>
                <NavLink to="/database" className="header-link header-card-database">Card Database</NavLink>
            </header>
        )
    }
}

export default NavBar; 