import NavbarCSS from './navbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    let [state,setState] = useState({username: "Victor"});
    return (
            <nav id='navbar'>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to= "/contact"><li>Contact</li></Link>
            <Link to="/about"><li>About</li></Link>
            </ul>
            <div className="nav-details">
            <p className="nav-username"> {state.username} </p>
            </div>
            </nav>
    );
}
export default Navbar;