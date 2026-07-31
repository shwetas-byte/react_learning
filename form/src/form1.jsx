import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Form1(){
    let[frmdata,setFrmdata]=useState({})
    function fun(e){
        // const{name,value}=e.target
        // setFrmdata({...frmdata,[name]:value})
        setFrmdata({...frmdata,[e.target.name]:e.target.value})
    }
    let navigate=useNavigate()
    function submit(e){
        e.preventDefault()
        console.log(frmdata)
        navigate('/form')
        // console.log(e)
        // if(frmdata.name.value==""){
        //     alert("Name is requitred")
        }
    
    return(
        <>
            <h1>Registration Form</h1>
            <form onSubmit={submit}>
                <label htmlFor="">Name:</label>
                <input required onChange={fun} type="text" name="name" />
                <br /><br />

                <label htmlFor="">Age:</label>
                <input onChange={fun} type="text" name="age" />
                <br /><br />


                <label htmlFor="">Contact:</label>
                <input onChange={fun} type="text" name="contact" />
                <br /><br />


                <label htmlFor="">City:</label>
                <input onChange={fun} type="text" name="city" />
                <br /><br />

                <input type="submit" />

            </form>
        </>
    )
}
