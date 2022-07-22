import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <Link className="navbar__link" to='/about'>О разработчике</Link>
                <Link className="navbar__link" to='/posts'>Пости</Link>
            </div>
        </div>
    )
}

export default Navbar;