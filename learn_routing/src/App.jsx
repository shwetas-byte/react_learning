import {Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Navbar } from './Components/Navbar'
import { Service } from './Components/Service'
import { Contact } from './Components/Contact'
import { Login } from './Components/Login'
import { Layout } from './Components/layout'
 function App(){
  return(
    <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App