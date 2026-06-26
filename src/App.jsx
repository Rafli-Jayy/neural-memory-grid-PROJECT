import { Route, Routes } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import GameArena from './pages/GameArena'



function App() {

  return (

    <Routes>

      <Route path="/" element={<LandingPage />}/>
      <Route path="/gamearena" element={<GameArena />}/>
      <Route path="*" element={<NotFound />}/>

    </Routes>

  )

}



export default App