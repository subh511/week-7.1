import {BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
function App() {

  return (
    <div>
    <div style={{backgroundColor:"black",color:"white"}}>
     hi this is a topbar!
    </div>
    <BrowserRouter>
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
