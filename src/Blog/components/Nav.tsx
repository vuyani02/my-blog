import { FaSearch, FaUserCircle } from 'react-icons/fa'
import './css/nav.css'

const Nav = () => {
    return (
        <nav>
            <div className="search">
                <input type="text" className='blog-input' placeholder='Search...'/>
                <span className='search-icon'><FaSearch/></span>
            </div>

            <FaUserCircle className='user'/>
        </nav>
    )
}

export default Nav