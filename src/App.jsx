import { useState } from 'react'
import './App.css'
import {Link,Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './Login'
import Forgot from './Forgot'
import NotFound from './NotFound'
import GuestInformation from './Guest Informaiton/GuestInformation'
import Prerequest from './Prerequest'
import Dashboard from './dashboard/Dashboard'
// import navbar from './LogIn/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/'  Component={Login}/>
        <Route path='/forgot' Component={Forgot}/>
        <Route path='/guestinformation' Component={GuestInformation}/>
        <Route path='/pre-request' Component={Prerequest}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


// 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


export default App
