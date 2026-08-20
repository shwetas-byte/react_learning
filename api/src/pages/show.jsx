import axios from "axios"
import { useEffect, useState } from "react"


export default function Show(){
    let[apidata,setapidata]=useState([])
     useEffect( () => {
                axios.get('http://localhost:3000/userdata')
                .then((res)=>setapidata(res.data))
                .catch((err)=>console.log("data not get",err)
                )
            },[])
    return(
        <>

            <table border='' width='full'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Age</th>
                </tr>

                {
                    apidata.map((e)=>(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td>{e.age}</td>

                        </tr>
                    ))

                }
            </table>
           
        </>
    )
    
}