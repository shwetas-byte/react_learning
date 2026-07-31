import myimg from './assets/react.svg'
import { MdBusinessCenter } from "react-icons/md";
export function Map(){
    let person=[
        {name:<MdBusinessCenter/>,age:18,city:"Bhopal",image:myimg},
        {name:"Pihu",age:16,city:"Betul",image:myimg},
        {name:"Ayushi",age:19,city:"Indore",image:myimg},
    ]
    return(
        <>
            <h1>This is map</h1>
            <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                {
                person.map((e)=> <div style={{border:'2px solid',width:"100px"}}>
                    <img src={e.image} alt="" />
                        <h1>{e.name}</h1>
                        <h2>{e.age}</h2>
                        <h3>{e.city}</h3>
                    </div>)
}
            </div>
        </>
    )
}