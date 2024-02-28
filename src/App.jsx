import Dataclients from "./components/dataclientsViews"
import About from "./components/pages/about"
import Home from "./components/pages/home"
import Raffle from "./components/pages/raffle"
import FormData from "./components/formdataClients"
import Submenu from "./components/submenu"
import Menu from "./components/menu"
import Purchase from "./components/purchase"
import TicketPurchase from "./components/ticketpurchase"
import Message from "./components/alerts/correctClients"
import Submenufooter from "./components/submenufooter"
import Homeslide from "./components/homeslide"
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App () {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={ 
           <div><Home /> 
           <Homeslide /> 
           </div> 
        } /> 
        <Route path="/about" element={ <About /> }/>
        <Route path="/raffle" element={ <Raffle /> }/>
        <Route path="/History" element={
          <div class= "row">
            <div class="col-10" ><Dataclients /></div>
            <div class="col-1"></div>
            <div class="col-1"> <Submenufooter /> </div>
        </div>
        }/>
        <Route path="/register" element={ 
          <div class= "row"> 
          <div class="col-10" ><FormData /></div>
          <div class="col-1" ><Submenu /></div>

        </div>
        } />
        
        <Route path="/purchase" element={ 
        
        <div class= "row"> 
        <div class="col-10" ><Purchase /></div>
        <div class="col-1" ><Submenu /></div>
        </div>
       
        
        } />
        </Routes>
      
    </BrowserRouter>
    )
}

export default App