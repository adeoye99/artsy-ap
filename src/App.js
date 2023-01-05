import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes  } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path= "/" element ={<Home/>}/>
           <Route path= "/auction" element ={<Hero/>}/>
           <Route path= "/drop" element ={<Hero/>}/>
        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
