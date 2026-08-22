import { useEffect, useState } from "react"
import axios from 'axios'
export default function Api(){
    let [apidata,setapidata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((res)=>console.log(res)) pura object pass krega res mtlb vo ek object hai tohuske and data nam ki key hai
        .then((res)=>setapidata(res.data))
        .catch((err)=> console.log("data not fetched",err))


        


    },[])
    return(
        <>
            <table border=''>
                <tr>

                    <th>Id</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
                
                    {
                        apidata.map((e)=>(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.body}</td>
                            </tr>
                        ))
                    }
              

            </table>
            
        </>
    )
}