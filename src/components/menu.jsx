import "../css/style.css"
import {Link} from "react-router-dom"
import React, {Fragment, useState} from 'react';
import CorrectClients from "../components/alerts/userloginnotice";
import Modals from "./modals";

const menu = () => {

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active)
  }


return(
    <div className=" menu ">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">

            <Link className="navbar-brand text-white" to="/">
            <img src="../../public/logo.svg" alt="logo image" className="img-fluid" />
              Crypto Friendly</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse d-flex flex-row" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="about">
          <img src="../../public/about.png"  />
            Quienes Somos</Link>
        </li>
        <li   className="nav-item">
          <Link className="nav-link text-white" to="raffle">
          <img src="../../public/logo.gif" alt="logo image" />
            Sorteos</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link text-white" to="history">
          <img src="../../public/transaccion.png" alt="logo image" />
            Transacciones de Usuarios</Link>
        </li>
        <li className="nav-item" onClick={toggle}>
        <Link className="nav-link text-white" to="register" >
        <img src="../../public/lot.svg" alt="" />
        Comprar boletos</Link>
        </li>
      </ul>
    </div>

    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <a className="nav-link text-white" href="https://wa.link/795vmz"><i className="bi bi-whatsapp"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="https://web.telegram.org"><i className="bi bi-telegram"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="https://www.tiktok.com/@cryptofriendly0"><i className="bi bi-tiktok"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="https://www.instagram.com/cryptofriendly0/"><i className="bi bi-instagram"></i></a>
        </li>
        <li className="nav-item">
        <a classNames="nav-link text-white" href="https://www.facebook.com/cryptofrienly"><i className="bi-facebook"></i> </a>
        </li>
       
      </ul>
    </div>

    
  </div>

</nav>

<Modals active={active} toggle={toggle} >
      <CorrectClients />
</Modals>

    </div>
)
}

export default menu;