import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function Form_Local(){
    let[frmdata,setfrmdata]=useState({})
    let navigate=useNavigate()
    function change(e){
        const{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify(frmdata))
        navigate('/form1_local')

        
    }
    return(
        
        <>
            <h1>Registration Form</h1>

            <form onSubmit={submit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={change} />
                <br /><br />

                <label htmlFor="">Email:</label>
                <input type="text" name="email" onChange={change} />
                <br /><br />

                <label htmlFor="">Contact:</label>
                <input type="text" name="contact" onChange={change} />
                <br /><br />

                <label htmlFor="">Password:</label>
                <input type="text" name="password" onChange={change} />
                <br /><br />

                <label htmlFor="">Address:</label>
                <input type="text" name="address" onChange={change} />
                <br /><br />

                <label htmlFor="">Age:</label>
                <input type="text" name="age" onChange={change} />
                <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}