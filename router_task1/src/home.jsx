import { useNavigate } from "react-router-dom"

function Home()
{ 
   let navigate= useNavigate()
    function fun(){
        navigate('/contact')
    }
    return(
        <>
            <h1>Home pagee</h1>
            <button onClick={fun}>contact</button>
        </>
    )
}
export default Home