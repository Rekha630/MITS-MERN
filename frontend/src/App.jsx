import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Counter from './Components/Counter'
import  {Route,Routes} from 'react-router-dom'
import UseState from './Hooks/UseState'
import Login from './auth/Login'
import Hook from'./Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signedup from './auth/Signedup'
import UseRef from './Hooks/UseRef'
// import useReducer from './Hooks/UseReducer'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
const element=<h1>Hello</h1>
const App = () => {
  return (
    <>
    <h1>Hello</h1>
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<Home name="Rekha"/>}/>
    <Route path='/about' element={<About name="Rekha" age={25} dept="Cyber Security"/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signedup' element={<Signedup/>}/>

    <Route path='/hook' element={<Hook/>}>
    <Route path='useState'element={<UseState/>}/>
    <Route path='useEffect' element={<UseEffect/>}/>
    <Route path='useEffectApi' element={<UseEffectApi/>}/>
    <Route path='useRef' element={<UseRef/>}/>
    <Route path='useReducer' element={<UseReducer/>}/>
    <Route path='useMemo' element={<UseMemo/>}/>
    <Route path='UseCallback' element={<UseCallback/>}/>
    </Route>
   </Routes>
   </>
  )
}
export default App