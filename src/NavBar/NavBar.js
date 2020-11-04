import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import MaterialIcon from 'material-icons-react';

class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <nav className="header">
                <a href="/" className="header-link header-daily-reading"><MaterialIcon color='white' icon='today' /> Daily Reading</a>
                <a href="/journal" className="header-link header-my-journal"><MaterialIcon color='white' icon='create' /> My Journal</a>
                <a href="/database" className="header-link header-card-database"><MaterialIcon color='white' icon='find_in_page' /> Card Database</a>
            </nav>
        )
    }
}

export default NavBar; 