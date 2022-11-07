import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div>
      <Header />
      <Home></Home>
      <Footer/>
    </div>
  )
}

export default App