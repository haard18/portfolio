import './App.css'
import Home from './pages/Home'

import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/load' element={<planet/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
