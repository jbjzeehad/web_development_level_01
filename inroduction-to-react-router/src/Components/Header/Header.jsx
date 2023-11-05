import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <span>My website</span>
            <nav>
                <Link to='/'>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <Link to='/contact'>Contact Us</Link>

            </nav>

        </div>
    );
};

export default Header;