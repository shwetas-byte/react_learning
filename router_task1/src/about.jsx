import { Link } from "react-router-dom"


function About()
{
    return(
        <>
            <h1>this is about page</h1>
            <Link to='/contact'><button >To contact</button></Link>
        </>
    )
}
export default About