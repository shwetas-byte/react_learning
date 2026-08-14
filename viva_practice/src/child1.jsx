import { useState } from "react"

export default function Child1(){
    let[logindata,setlogin_data]=useState({})
    function change(e){
        const{value,name}=e.target
        setlogin_data({...logindata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        let data=JSON.parse(localStorage.getItem("userdata"))
        if (logindata.email!=data.email || logindata.pass!=data.password){
            alert("User not found")
        }
        else{
            alert("User found")
        }
    }
    return(
        <form onSubmit={submit} action="">
            <label htmlFor="">Email:</label>
            <input type="text" onChange={change} name="email" id="" />
            <br />
            <label htmlFor="">Password:</label>
            <input type="text" onChange={change} name="pass" id="" />
            <br />
            <input type="submit" name="" id="" />
        </form>
    )
}