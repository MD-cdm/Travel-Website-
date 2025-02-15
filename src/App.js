import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/.Main'
import Footer from './Components/Footer/Footer'
import CardSlider from './Components/Slider/Slider'
import Email from './Components/Email/Email'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Email />
      <CardSlider />
      <Footer />
    </>
  )
}

export default App;