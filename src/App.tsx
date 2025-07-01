import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Board from './tictactoe/tictactoe'
import Home from './Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tictactoe" element={<Board />} />
      </Routes>
    </>
  )
}

export default App
