import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import { Route , Routes , Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route />
           <Route path = "/" element ={<Hero/>}/>
        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
