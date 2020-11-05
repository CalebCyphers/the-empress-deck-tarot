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
            <header> 
                <h1 className='site-header'>Empress Tarot Journal</h1>
                <nav className="menu">
                    <a href="/" className="menu-link menu-daily-reading"><MaterialIcon fontSize="large" icon='today' /> Daily Reading</a>
                    <a href="/journal" className="menu-link menu-my-journal"><MaterialIcon icon='create' /> My Journal</a>
                    <a href="/database" className="menu-link menu-card-database"><MaterialIcon icon='find_in_page' /> Card Database</a>
                </nav>
            </header>
        )
    }
}

export default NavBar; 