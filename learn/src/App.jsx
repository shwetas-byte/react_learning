import './App.css'
import { Home1,Home2} from './home'
import myimg from './assets/hero.png'
import { Contact } from './assets/contact'
import { Service } from './assets/service'
function App()
{
  let mystyle={
    backgroundColor:'red'
  }
  let name = "shweta"
  return(
    <>
      <h1 style={{backgroundColor:"yellow"}}> Welcome</h1>
      <h1 style={mystyle}>Lorem ipsum dolor sit.</h1>
      <h1>{name}</h1>
      <h1 className="head"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, libero.</h1>
      {/* <img src={myimg} alt="" /> */}
      <Home1 />
      <Home2 />
      {/* <img src="moon.webp " alt="" /> */}\
      <hr />
      <Contact name='Shweta' number='1234'/>
      <Service name='Shweta Singh' number='12345566' age='18'/>
  
    </>
  )
}
export default App