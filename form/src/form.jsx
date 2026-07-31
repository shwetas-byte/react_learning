import { useState } from "react"

const Form=()=>{
    let[name,setName]=useState()
    let[contact,setContact]=useState()
    let[password,setPassword]=useState()
    let[age,setAge]=useState()
    let[address,setAddress]=useState()


    
    function hinput(event){
        setName(event.target.value)
    }
    function hinput1(e){
        setContact(event.target.value)
    }
    function hinput2(e1){
        setPassword(e1.target.value)
    }
    function hinput3(e2){
        setAge(e2.target.value)
    }
    function hinput4(e3){
        setAddress(e3.target.value)
    }
    function submit(sub){
        sub.preventDefault()
        console.log(name,contact,password,age,address)
    }
    return(
        <>
            <h1>Form page</h1>
            {/* <h2>{name}</h2>
            <h2>{contact}</h2>
            <h2>{age}</h2>
            <h2>{password}</h2>
            <h2>{address}</h2> */}
            <form onSubmit={submit}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={hinput} />
                <br /><br />
                <label htmlFor="">Contact</label>
                <input type="text" onChange={hinput1} />
                <br /><br />
                <label htmlFor="">Password:</label>
                <input type="text" onChange={hinput2} />
                <br /><br />
                <label htmlFor="">Age</label>
                <input type="text" onChange={hinput3} />
                <br /><br />
                <label htmlFor="">Address:</label>
                <input type="text" onChange={hinput4} />
                <br /><br />
                <input type="submit" name="" id="" />


            </form>
        </>
    )
}
export default Form