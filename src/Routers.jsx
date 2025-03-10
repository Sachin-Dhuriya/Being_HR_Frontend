import { Route, Router, Routes } from 'react-router-dom'
import './Routers.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/Aboutus/About'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Events from './Components/Event/Events'
import DashBoard from './Admin/DashBoard'
import UserDetails from './Admin/UserDetails'
import AdminHome from './Admin/AdminHome'
import SignupPage from './Components/Signup/SignupPage'
import Login from './Components/Signin/Login'
import Skill from './Components/Allevents/Skill'
import FlagshipEventsPage from './Components/Allevents/FlagshipEventPage'
import EventRegistration from './Admin/EventRegistration'
import EventHosting from './Admin/EventHosting'

const Routers = () => {
  
    

  return (
    <div className='main-body'>
      
        <Header  />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/admin-user-querys' element={<DashBoard/>} />
        <Route exact path='/admin-user-records' element={<UserDetails/>} />
        <Route exact path='/admin' element={<AdminHome/>} />
        <Route exact path='/event' element={<Events/>} />
        <Route exact path='/skill_workshop' element={<Skill/>} />
        <Route exact path='/events-registration' element={<EventRegistration/>} />
        <Route exact path='/flagship' element={<FlagshipEventsPage/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/signup' element={<SignupPage/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createevent' element={<EventHosting/>} />
        <Route path="/register/:eventId" element={<Skill />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routers
