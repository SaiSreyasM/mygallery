import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import View from './Pages/View'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/view' element={<View />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
