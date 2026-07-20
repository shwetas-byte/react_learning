import {Link } from 'react-router-dom' 
export function Navbar(){
    return(
        <>
            <nav style={{display:"flex" , justifyContent:"space-evenly",alignItems:'center'}}>
                <h1>Logo</h1>
                <ul style={{display:'flex',gap:'40px',listStyle:'none'}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </>
    )
}