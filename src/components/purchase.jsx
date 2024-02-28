import{ useMutation, useQueryClient } from "@tanstack/react-query"
import { createPurchase } from "../api/clientsApi"
import "../css/style.css"
import React, {Fragment, useState} from 'react';
import CorrectPurchase from "../components/alerts/correctPurchase";
import Modals from "./modals";

function purchase () {

  //activa el modal
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active)
  }


//funcion de que valida campos numericos
function validarNumero(input) {
  // Obtén el valor actual del input
  var valor = input.value;

  // Reemplaza cualquier caracter no numérico con una cadena vacía
  var nuevoValor = valor.replace(/[^0-9]/g, '');

  // Si el nuevo valor es diferente, actualiza el valor del input
  if (nuevoValor !== valor) {
    input.value = nuevoValor;
  }
}

//valida solo entrada de numeros y letras
function validarHash(input){
var valor = input.value;

var nuevoValor = valor.replace(/[^0-9 ^a-z ^A-Z]/g,'');

if (nuevoValor !== valor) {
  input.value = nuevoValor;
}
}
//valida entrada de solo letras
function validarCaracter(input){
var valor = input.value;

var nuevoValor = valor.replace(/[^a-z ^A-Z]/g,'');

if (nuevoValor !== valor) {
  input.value = nuevoValor;
}
}

//funcion de envio de imagenes

//const [file , setFile] = useState(null)

let file1 = null;
var hashC = null;



const selectedHandler = async(e) => {
  file1 = e.files[0]
  const objectURL = URL.createObjectURL(file1)
  document.getElementById('imgtransaction').src = objectURL
  document.getElementById('imgpurchase').value = 'imgpurchasefil'+ file1.name

  return(
    <div>prueb</div>
  )
}

const sendHandler = () => {
  if(file1 == null ){
    alert('you must upload file')
    return
  }

  const formdata = new FormData()

  formdata.append('imgpurchasefil', file1)
  formdata.append('hash', hashC)
  fetch('https://api.crypto-friendly.net/uploadpurchase', {
    method: 'POST',
    body: formdata
  })
  .then(res => res.text())
  .then(res => {console.log(res)

  })
  .catch(err => {
    console.error(err)
  })
  

  setFile(null)
}

//fin de funcion de envio



  const queryClient = useQueryClient();

  const addClientMutation = useMutation({
      mutationFn: createPurchase,
      onSuccess: () => {
         <Alert />
          //invalidar cache y refrescar
          queryClient.invalidateQueries("purchase");
      },
  });

  const handleSubmit = (e) => {
     hashC = document.getElementById('hash').value;
      e.preventDefault();
      const formData = new FormData(e.target);
      const clients = Object.fromEntries(formData);
      addClientMutation.mutate(clients)
      e.target.reset()
  };


  const datapurchase = (e) => {
    handleSubmit(e)
 toggle()
  sendHandler(e)
  ocument.getElementById('imgtransaction').src = '';
 
}

    return(
        <div class="formregister" >
        <form class="row g-3 " onSubmit={datapurchase} >
          <h1 class="text-center">Ingrese los datos de la orden de compra</h1>
      <hr />

      <div class="col-md-12">
    <img src="../../public/QR_wallet.svg"  alt="" srcset="" class="qr img-fluid" />
      <label for="formFile" class="form-label" htmlFor="imgdni"> Hash Wallet CryptoFriendly: TDXh52VhVdVvM3W36bvKGvQSM6Wz6dczvM</label>
    </div>
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label" htmlFor="clientemail">Valida tu correo</label>
        <input type="email" class="form-control" id="email" name="clientemail" required />
      </div>
      <div class="col-md-4">
      <label for="formFile" class="form-label" htmlFor="amount">Monto de la transaccion</label>
      <input type="text" class="form-control" id="paymentwallet" name="amount" onChange={(e) => validarNumero(e.target)} required />
    </div>
      <div class="col-md-4">
        <label for="validationDefault05" class="form-label" htmlFor="hash">Hash de transacción de tu compra</label>
        <input type="text" class="form-control" id="hash" name="hash"  onChange={(e) => validarHash(e.target)} required />
      </div>
      <div class="col-md-8">
      <label for="formFile" class="form-label" htmlFor="imgpurchase">Imagen transaccion</label>
      <input class="form-control" type="file" onChange={(e) => selectedHandler(e.target)} id="imgpurchasefil" name="imgpurchasefil"  required/>
    
    <img id="imgtransaction" className="img-fluid"/>
    </div>
    <input type="text" class="oculto form-control" id="imgpurchase" name="imgpurchase" required />
      <div class="col-8">
        <button class="btn btn-primary" type="submit" data-bs-toggle="collapse" href="#collapseExample" >Terminar Compra</button>
      </div>
      <div className="col-4">
      <span>Verifica tus datos de la compra, se te enviara un correo</span>
      </div>
      
      <hr />
      <Modals active={active} toggle={toggle} >
      <CorrectPurchase />
</Modals>
    </form>


    </div>
    )
}

export default purchase