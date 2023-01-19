import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import Drop from "./Pages/Drop"
import Auction from "./Pages/Auction"
import Marketplace from "./Pages/Marketplace"
import React , {lazy ,  Suspense} from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path= "/" element ={<Home/>}/>
           <Route path= "/auction" element ={<Auction/>}/>
           <Route path= "/drop" element ={<Drop/>}/>
           <Route path = "/marketplace" element = {<Marketplace/>} />
        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
