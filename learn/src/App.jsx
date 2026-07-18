import './App.css'
import { Home1,Home2} from './home'
import myimg from './assets/hero.png'
import { Contact } from './assets/contact'
import { Service } from './assets/service'
import { Heade } from './header'
function App()
{
  // let mystyle={
  //   backgroundColor:'red'
  // }
  // let name = "shweta"
  return(
    <>
      <Heade/>
      {/* <h1 style={{backgroundColor:"yellow"}}> Welcome</h1>
      <h1 style={mystyle}>Lorem ipsum dolor sit.</h1>
      <h1>{name}</h1>
      <h1 className="head" className='text-7xl text-center text-blue-950'> Lorem ipsum dolor sit amet.</h1>
      {/* <img src={myimg} alt="" /> */}
      {/* <Home1 /> */}
      {/* <Home2 /> */}
      {/* <img src="moon.webp " alt="" /> */}\
      <hr />
      {/* <Contact name='Shweta' number='1234'/> */}
      {/* <Service name='Shweta Singh' number='12345566' age='18'/> */}
      <hr />
      {/* <section className='flex justify-around m-12 bg-amber-300 p-5 text-2xl font-bold'>
        <h1>Lorem ipsum dolor sit.</h1>
        <h1>Lorem ipsum dolor sit.</h1>
        <h1>Lorem ipsum dolor sit.</h1>
        <h1>Lorem ipsum dolor sit.</h1>
        <h1>Lorem ipsum dolor sit.</h1>
      </section> */}
       
  
    </>
  )
}
export default App