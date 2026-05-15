
import { Suspense, useState } from 'react'
import './App.css'
import CardHeading from './Component/CardHeading/CardHeading'
import Footer from './Component/Footer/Footer'
import GetStarted from './Component/GetStarted/GetStarted'
import Hero from './Component/Hero/Hero'
import Nav from './Component/Nav/Nav'

import Simple from './Component/Simple/Simple'
import State from './Component/State/State'
import Transform from './Component/Transform/Transform'
import { ToastContainer } from 'react-toastify'


const CardPromise = fetch('CardData.json')
.then(res =>res.json())

function App() {
    const [buy,setBuy] = useState([])

 
  
  return (
    <>
        <Nav buy={buy}></Nav>

        <Hero></Hero>

        <State></State>

        

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

          <CardHeading CardPromise={CardPromise} buy={buy} setBuy={setBuy}></CardHeading>

        </Suspense>

        
        

        <GetStarted></GetStarted>
        <Simple></Simple>
        <Transform></Transform>
        <Footer></Footer>

         <ToastContainer/>

    </>
  )
}

export default App
