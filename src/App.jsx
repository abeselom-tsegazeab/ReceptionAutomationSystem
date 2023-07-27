import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './LogIn/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
