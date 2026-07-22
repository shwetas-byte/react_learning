import {Link } from 'react-router-dom' 
export function Navbar(){
    return(
        <>
            <nav style={{display:"flex" , justifyContent:"space-evenly",alignItems:'center',backgroundColor:"magenta"}}>
                <h1>Logo</h1>
                <ul style={{display:'flex',gap:'40px',listStyle:'none',fontSize:'20px'}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </>
    )
}