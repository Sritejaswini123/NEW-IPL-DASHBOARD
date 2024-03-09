import { BrowserRouter  , Link, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import TeamMatches from "./TeamMatches";
import './App.css'
const App =()=>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/team-matches/:id" element = {<TeamMatches/>}/>
      <Route path = "*" element={<NotFound/>} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App