import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Undefined from "./pages/undefined.jsx"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Undefined/>}/>
      </Routes>
    </Router>
  )
}

export default App
