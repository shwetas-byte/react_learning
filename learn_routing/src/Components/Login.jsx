export  function Login(){
    return(
        <>
            <section className="flex justify-center gap-[150px] h-[100vh] items-center bg-amber-200  ">
                <div className="leading-[40px]"> 
                    <h1 className=" font-semibold text-2xl ">Log in to your account</h1>
                    <form action="">
                        Email: <br />
                        <input className="border border-gray-600 rounded-[5px]  pl-2 w-100 " type="text" placeholder="john@example.com"/> <br />
                        Password: <br />
                        <input className="border border-gray-600 rounded-[5px]  w-100 pl-2" type="password" placeholder="*******" />
                    </form>
                    <button className="bg-blue-800 mt-3 w-100 text-white rounded-[5px]">Submit</button>
                    <p className="text-center">Don't have an account? <span className="text-blue-900 ">Sign up</span></p>
                </div>
                <div><img className="w-[500px] h-[500px] rounded-[5px]" src="img.jpg" alt="" /></div>
            </section>
        </>
    )
}