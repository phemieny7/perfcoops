import React from 'react'
import { Link } from 'react-router-dom'
import LogoLight  from '../../assets/logo-light.png'
import LogoDark from '../../assets/logo-dark.png'
const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark" data-navbar="fixed">
        <div className="container">
            <div className="navbar-left">
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to='/'>
                    <img className="logo-light" src={LogoLight}/>
                    <img className="logo-dark" src={LogoDark}/>
                </Link>
            </div>
            <section className="navbar-mobile">
            <nav className="nav nav-navbar ml-auto">
                <Link className="nav-link" to="#home">Home</Link>
                <Link className="nav-link" to="#section-features">Features</Link>
                <Link className="nav-link" to="#section-pricing">Pricing</Link>
                <Link className="nav-link" to="#section-faq">FAQ</Link>
                <Link className="nav-link" to="#footer">Contact</Link>
            </nav>
            </section>
        </div>
     </nav>

);
export default Navbar;