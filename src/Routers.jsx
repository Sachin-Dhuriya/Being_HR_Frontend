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
  <Route path="/" element={<Home />} />
  <Route path="/admin-user-querys" element={<DashBoard />} />
  <Route path="/admin-user-records" element={<UserDetails />} />
  <Route path="/admin" element={<AdminHome />} />
  <Route path="/event" element={<Events />} />
  <Route path="/skill_workshop" element={<Skill />} />
  <Route path="/events-registration" element={<EventRegistration />} />
  <Route path="/flagship" element={<FlagshipEventsPage />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/signup" element={<SignupPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/createevent" element={<EventHosting />} />
  <Route path="/register/:eventId" element={<Skill />} />
</Routes>

        <Footer/>
    </div>
  )
}

export default Routers
