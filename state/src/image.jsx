import img1 from './krishna.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import { useState } from 'react'
function Image()
{ 
    let[image,setImage]=useState(img1)   
    return(
        <>
            <h1>This is image page</h1>
            <img onMouseEnter={()=>setImage(img1)} width={400} src={img1} alt="" />
            <img onMouseEnter={()=>setImage(img2)} width={400} src={img2} alt="" />
            <img onMouseEnter={()=>setImage(img3)} width={400} src={img3} alt="" />
            <h1>
            <img width={400} src={image} alt="" />

            </h1>
        </>
    )
}
export default Image