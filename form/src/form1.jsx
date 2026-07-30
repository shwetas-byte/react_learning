import { useState } from "react"

export default function Form1(){
    let[frmdata,setFrmdata]=useState({})
    function fun(e){
        // const{name,value}=e.target
        // setFrmdata({...frmdata,[name]:value})
        setFrmdata({...frmdata,[e.target.name]:e.target.value})
    }
    function submit(e){
        e.preventDefault()
        console.log(frmdata)
        console.log(e)
    }
    return(
        <>
            <h1>Registration Form</h1>
            <form onSubmit={submit}>
                <label htmlFor="">Name:</label>
                <input onChange={fun} type="text" name="name" />
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