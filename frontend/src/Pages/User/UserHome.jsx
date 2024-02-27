import React from 'react'
import Header from '../../components/UserComponents/Header/Header'
import Footer from '../../components/UserComponents/Footer/Footer'
import Home from '../../components/UserComponents/Home/Home'
import ContactUs from '../../components/UserComponents/ContactUs/ContactUs'
import Profile from '../../components/UserComponents/Profile/Profile'
import Projects from '../../components/UserComponents/Projects/Projects'
import About from '../../components/UserComponents/About/About'
import Services from '../../components/UserComponents/Services/Services'
import Gallery from '../../components/UserComponents/Gallery/Gallery'
import Video from '../../components/UserComponents/Video/Video'
import Social from "../../components/UserComponents/Social/Social"


function UserHome() {
  return (
    <div className='overflow-hidden'>
        <Home/>
        <Projects/>
        <Video/>
        <Social/>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default UserHome