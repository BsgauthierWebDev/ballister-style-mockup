import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
    handleNav() {
        let x = document.getElementById('menu');
        if (x.className === 'menu') {
            x.className += 'responsive';
        } else {
            x.className = 'menu';
        }
    }

    render() {
        return (
            <div className = 'Nav'>
                <div className = 'menu'>
                    <Link to = '/'>Home | </Link>
                    <Link to = '/about'>About</Link>
                </div>
            </div>
        )
    }
}