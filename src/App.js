import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes  } from 'react-router-dom';
// import Home from './Pages/Home';
// import Drop from "./Pages/Drop"
// import Auction from "./Pages/Auction"
// import Marketplace from "./Pages/Marketplace"
import React , {lazy ,  Suspense} from "react"
import {BallTriangle } from  'react-loader-spinner'



const Home = lazy(() => import("./Pages/Home") )
const Drop = lazy(() => import("./Pages/Drop") )
const Auction = lazy(() => import("./Pages/Auction") )
const Marketplace = lazy(() => import("./Pages/Marketplace") )
const Footer  = lazy(()=> import("./Component/Footer") )
const ShoppingCart = lazy(() => import('./Pages/ShoppingCart') )
const PaymentDetails = lazy(() => import('./Pages/PaymentDetails'))
const ShoppingDetails = lazy(() => import('./Pages/ShoppingDetails'))

function App() {
  return (
    <div className="App">
      <Suspense fallback = {
      <div>
        loading...
        {/* <BallTriangle
             height={100}
             width={100}
             radius={5}
             color="#00000"
             ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
             wrapperStyle=""
             visible={true}
           /> */}
      </div> 
    }>
      <Router>
        <Navbar/>
        <Routes>
           <Route path= "/" element ={<Home/>}/>
           <Route path= "/auction" element ={<Auction/>}/>
           <Route path= "/drop" element ={<Drop/>}/>
           <Route path="/marketplace" element={<Marketplace/>}>
                  <Route index element={<ShoppingCart />}/>
                  <Route path="shoppingdetails" element={<ShoppingDetails />} />
                  <Route path = "paymentDetails" element= { <PaymentDetails />}/>
           </Route>  
        </Routes>
        <Footer/>
      </Router>
      </Suspense>
      
      
    </div>
  )
}
export default App;
