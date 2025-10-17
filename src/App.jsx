import { Routes, Route } from "react-router"
import Landing from "./pages/Landing"
import CFI from "./pages/CFI"
import CDD from "./pages/CDD"
import Escuela from "./pages/Escuela"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/escuela' element={<Escuela/>}/>
      <Route path='/cfi' element={<CFI/>}/>
      <Route path='/cdd' element={<CDD/>}/>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
