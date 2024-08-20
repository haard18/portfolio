import './App.css'
import Home from './pages/Home'

import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import Projects from './pages/Projects'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
