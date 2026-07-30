import { useState } from "react"

export default function Form_task(){
    let[frmdata,setFrmdata]=useState({})
    function fun(e){
        const{name,value}=e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        console.log(frmdata)
        console.log(e)
    }
    return(
        <>
            <form onSubmit={submit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={fun} />
                <br /><br />

                <label htmlFor="">Contact:</label>
                <input type="text" name="contact" onChange={fun} />
                <br /><br />

                <label htmlFor="">Age:</label>
                <input type="text" name="age" onChange={fun} />
                <br /><br />

                <label htmlFor="">City:</label>
                <input type="text" name="city" onChange={fun} />
                <br /><br />

                <label htmlFor="">Password:</label>
                <input type="text" name="password" onChange={fun} />
                <br /><br />

                <label htmlFor="">DOB:</label>
                <input type="text" name="dob" onChange={fun} />
                <br /><br />

                <label htmlFor="">Course:</label>
                <input type="text" name="course" onChange={fun} />
                <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}