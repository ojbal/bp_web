import {Link} from "react-router-dom"
import Message from "../components/alerts/correctClients"

function submenu () {

    function openModal() {
        setIsOpen(true);
      }
    

    return (
        <div className="submenu ">
        
        <hr></hr>
        <Link className="navbar-brand" to="/register" >
         <img src="../../public/registro.svg" alt="" srcset=""  className="img-fluid"/>
         <p>Registro de Usuario</p>
         </Link>
         <Link className="navbar-brand" to="/purchase" >
         <img src="../../public/payments.svg" alt="" srcset=""  className="img-fluid"/>
         <p>Registro de Compra</p>
         </Link>
         
         
        <hr />

        

        </div>

        

        
    ) 
}

export default submenu