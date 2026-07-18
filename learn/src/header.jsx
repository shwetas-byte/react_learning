export function Heade(){
    return(
        <>
            <nav className=" p-3 flex   justify-around bg-amber-300">
                
                <h1 className="text-4xl flex "> <img src="moon.webp " alt="" width='50px' height="50px" />Logo</h1>
                <ul className="flex justify-center gap-9 text-2xl">
                   <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Service</li>
                </ul>
                <button className="border-3 p-2 rounded-2xl bg-orange-400 font-bold border-b-emerald-950 bo">Login/signup</button>
            </nav>
        </>
    )
}