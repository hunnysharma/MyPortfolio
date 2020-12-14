import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink to="/"><img height="35px"  src="https://static1.squarespace.com/static/55dd330ae4b02d3720f2e7d9/t/564c0995e4b0c7323ed26091/1447823765367/HSfavicon.jpg?format=1500w"/>
                        </NavLink>
                            <NavLink className="navbar-brand" to="/">Himanshu Sharma</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/service">Projects</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                         </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
