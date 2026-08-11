import { useState } from "react" 
import { useNavigate } from "react-router-dom"
export function Form1_local(){
    let[login_data,setlogin_data]=useState({})
    let navigate=useNavigate()

    function login(e){
        const{name,value}=e.target
        setlogin_data({...login_data,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        let local_data=JSON.parse(localStorage.getItem("userdata"))
        if(local_data.email != login_data.email || local_data.password != login_data.password ){
            alert("User not found")
        }
        else{
            alert("User")
            navigate('/welcome')
        }
        
    }


    return(
        <>
            <h1>Login Form</h1>
            <form action="" onSubmit={submit}>
                <label htmlFor="">Email</label>
                <input type="text" name="email" onChange={login} id="" />
                <br /><br />

                    <label htmlFor="">Password</label>
                <input type="text" name="password" onChange={login} id="" />
                <br /><br />

                <input type="submit" />
            </form>
        
        </>
    )


}