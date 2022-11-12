import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/:userId" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App