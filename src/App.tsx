import './App.css'
import { Routes, Route } from 'react-router-dom'
// @ts-ignore
import Board from './tictactoe/tictactoe'
// @ts-ignore
import MoonsScavengerHunt from './scavenger/scavengerhunt'
import Home from './Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tictactoe" element={<Board />} />
        <Route path="/scavenger" element={<MoonsScavengerHunt />} />
      </Routes>
    </>
  )
}

export default App
