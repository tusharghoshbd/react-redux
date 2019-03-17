import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = ()=>{


    return (
        <div>
            <NavLink  activeStyle={{ color: 'red' }} exact to="/">Home </NavLink> | 
            <NavLink activeStyle={{ color: 'red' }} to="/about">About </NavLink> | 
            <NavLink activeStyle={{ color: 'red' }} to="/contact">Contat </NavLink> | 
            <NavLink activeStyle={{ color: 'red' }} to="/post">Post </NavLink> |
            

        </div>
    )
}

export default Nav;