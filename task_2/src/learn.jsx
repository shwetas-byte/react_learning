import './App.css'
function Learn()
{
    let mystyle={
        background:'lightblue', 
        color:'orange'
    }
    return(
        <>
        <h1 style={{background:'brown',color:'pink'}}>This is Learn page</h1>
        <h1 style={mystyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, pariatur?</h1> 
        </>
        
    )
}
export default Learn