import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Insert(){
    let navigate=useNavigate()
    let[frmdata , setfrmdata]=useState({})
    function handlecahneg(e){
        const{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function frmsubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then(()=>alert('data inserted',navigate('/show')))
        .catch((err)=>console.log("not inserted",err))

    }

    return(
        <>
            <form onSubmit={frmsubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={handlecahneg} />
                <br /><br />

                 <label htmlFor="">Age:</label>
                <input type="text" name="age" onChange={handlecahneg} />
                <br /><br />

                 <label htmlFor="">Contact:</label>
                <input type="text" name="contact" onChange={handlecahneg} />
                <br /><br />

                 <label htmlFor="">City:</label>
                <input type="text" name="city" onChange={handlecahneg} />
                <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}