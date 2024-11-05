import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li><Link to={'/example'}>Home</Link></li>
                <li><Link to={'/pokemon'}>Pokemon Index</Link></li>
            </ul>
        </nav>
    
    ) 
}

export default NavBar