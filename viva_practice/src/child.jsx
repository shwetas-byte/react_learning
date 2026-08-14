import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Child(){
    let[frmdata,setfrmdata]=useState({})
    function change(e){
        const{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
        let navigate=useNavigate()

    function submit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem("userdata",JSON.stringify(frmdata))
        navigate('/child1')
        
    }
    return(
        <>
         <form onSubmit={submit} action="">
            <label htmlFor="">Name:</label>
            <input onChange={change} type="text" name="name" />
            <br /><br />
            <label htmlFor="">Email:</label>
            <input onChange={change} type="text" name="email" />
            <br /><br />
            <label htmlFor="">Password:</label>
            <input onChange={change} type="text" name="password" />
            <br /><br />
            <input type="submit" />
         </form>
        </>
    )
}