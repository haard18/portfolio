import './App.css'
import Home from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Achievements from './pages/Achivements'
import About from './pages/About'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
