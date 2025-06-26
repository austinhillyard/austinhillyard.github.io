import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Board from './tictactoe/tictactoe'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </>
  )
}

export default App
