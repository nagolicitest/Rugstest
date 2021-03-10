import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button'
import styled from 'styled-components';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const ClosemobileMenu = () => setClick(false);
    const [button, setButton] = useState(true)

    const showButton = () =>{
        if(window.innerWidth <= 960) {
        setButton(false);
    } else{
        setButton(true);
    }
};

window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <Link to="/" className='navbar-logo'>
                    UniRugs <i classname='fab fa-typo3' />
                    </Link>

                    <div className='menu-icon' onClick ={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' classname='nav-links' onClick={ClosemobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Ship'  classname='nav-links' onClick={ClosemobileMenu}>
                                Ship
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Overview' classname='nav-links' onClick={ClosemobileMenu}>
                                Overview
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Gallery' classname='nav-links=mobile' onClick={ClosemobileMenu}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                  
                

                </div>
            </nav>
        </>
    );
}

export default Navbar;

