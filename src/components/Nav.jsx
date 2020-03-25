import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Nav() {
    return <Link to='/'><img src={logo} width='130' height='40' style={{ marginLeft: 10, marginBottom: 5 }} /></Link>
}

export default Nav