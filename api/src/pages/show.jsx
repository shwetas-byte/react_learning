import axios from "axios"
import { useEffect, useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";




export default function Show(){
    let[apidata,setapidata]=useState([])
    let[editFrm,setEditFrm]=useState(false)
    let[editdata,seteditdata]=useState()

    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(alert("Data deleted"))
        .catch((er)=>console.log("data not deletd",er))
    }

    function updated(e){
        const{name,value}=e.target
        seteditdata({...editdata,[name]:value})
    }

    function finalupdate(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then(()=>alert('data updated'))
        .catch((er)=>console.log("data not updated",er))
    }
     useEffect( () => {
                axios.get('http://localhost:3000/userdata')
                .then((res)=>setapidata(res.data))
                .catch((err)=>console.log("data not get",err)
                )
            },[mydelete])
    return(
        <>

            <table border='' width='full'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    apidata.map((e)=>(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td>{e.age}</td>
                            <td><button><RiDeleteBin6Fill onClick={()=>mydelete(e.id)}/></button></td>
                            <td> <CiEdit onClick={()=>(setEditFrm(true),seteditdata(e))}/> </td>

                        </tr>
                    ))

                }
            </table>

            <br /><br /> <br /><br />

           {
             editFrm && <> <h1>Edit Form</h1> <form  onSubmit={finalupdate} >
                {/* <label htmlFor="">Id:</label> */}
                <input hidden type="text" value={editdata.id} onChange={updated}  /> <br /><br />

                <label htmlFor="">Name:</label>
                <input type="text" value={editdata.name} name="name" onChange={updated} /> <br /><br />

                <label htmlFor="">Age:</label>
                <input type="text" value={editdata.age} name="age" onChange={updated} /> <br /><br />

                <label htmlFor="">Contact:</label>
                <input type="text" value={editdata.contact} name="contact" onChange={updated} /> <br /><br />

                <label htmlFor="">City:</label>
                <input type="text" value={editdata.city}  name="city" onChange={updated}/> <br /><br />

                <input type="submit" />
             </form>
             </>
           }
           
        </>
    )
    
}