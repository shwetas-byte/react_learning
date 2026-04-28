function Contact()
{
    function fun(a)
    {
        alert(a)
    }
    return(
        <>
            <h1>Contact Page</h1>
            <button onClick={()=>fun('data')}>Click Here</button>
        </>
    )
}
export default Contact