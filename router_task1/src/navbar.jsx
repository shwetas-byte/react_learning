import { Link } from "react-router-dom"
import './App.css'

const Navbar=()=>{
    return(
        <>
          <nav id="nav_main">
            <h1>Logo</h1>
            <ul>
                <li><Link className="link" to='/'>Home</Link></li>
                <li><Link className="link" to='/about'>About</Link></li>
                <li><Link className="link" to='/contact'>Contact</Link></li>
                <li><Link className="link" to='/help'>Help</Link></li>
                <li><Link className="link" to='/service'>Service</Link></li>
            </ul>
          </nav>
        </>
    )
}
export default Navbar