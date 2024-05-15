import './App.css'
import Appointments from './views/Appointments'
import RegisterView from './views/RegisterView'
import LogInView from './views/LogInView'
import ScheduleView from './views/ScheduleView'
import NavBar from './components/primary/navBar/NavBar'
import HomeView from './views/HomeView'
import { Route, Routes } from 'react-router'


function App() {
  return (
    <div>
    <div><NavBar/></div>
    
    <Routes>
      <Route path = "/" element = {<HomeView />} /> 
      <Route path = "/Schedule" element = {<ScheduleView />} />
      <Route path = "/LogIn" element = {<LogInView/>} />
      <Route path = "/Citas" element = {<Appointments/>}/>
      <Route path = "/Registrarse" element = {<RegisterView/>} />
      <Route path = "/Agendar" element = {<ScheduleView/>} />
      <Route path = "*" element = {<div>Not Found</div>} />

    </Routes>
    </div>
  )
}

export default App
