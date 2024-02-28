import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { createClient, getCountry, upload } from "../api/clientsApi";
import React, {Fragment, useState} from 'react';
import CorrectClients from "../components/alerts/correctClients";
import "../css/style.css"
import Modals from "./modals";
//import validarNumero from "../scripts/validation"

const formdataClients = () =>  {

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
const validarCountry = async(e) =>{
  document.getElementById('codpais').value = e.value
  
}


//funcion para capturar los nombres de los archivos

//const [file , setFile] = useState(null)

let file1 = null;
let file2 = null;
var emailc = null;

const selectedHandler = async(e) => {
  file1 = e.files[0]
  const objectURL = URL.createObjectURL(file1)
  document.getElementById('imgwallet').src = objectURL
  document.getElementById('walletimgfile').value = 'walletimgfile'+ file1.name
}

const selectedHandler1 = async(e) => {
  file2 = e.files[0]
  const objectURL = URL.createObjectURL(file2)
  document.getElementById('imgdni').src = objectURL
  document.getElementById('imgdnireqfile').value = 'imgdnireqfile'+ file2.name
}

const sendHandler = (e) => {
  if(file1 == null || file2 == null){
    alert('you must upload file')
    return 

  }

  const formdata = new FormData()

  formdata.append('walletimg', file1)
  formdata.append('imgdnireq', file2)
  formdata.append('email', emailc)

  fetch('https://api.crypto-friendly.net/upload', {
    method: 'POST',
    body: formdata
  })
  .then(res => res.text())
  .then(res => {console.res(res)
  })
  .catch(err => {
    console.error(err)
  })
  
  setFile(null)
}

//fin de funcion de envio



    const queryClient = useQueryClient();
    const addClientMutation = useMutation({
        mutationFn: createClient,
        onSuccess: () => {
       
            //invalidar cache y refrescar
           queryClient.invalidateQueries("users");
        },
    });


     const handleSubmit = (e) =>{     
        e.preventDefault();
        const formData = new FormData(e.target);
        const clients = Object.fromEntries(formData);
        addClientMutation.mutate(clients)
        emailc = document.getElementById('email').value;
        e.target.reset()
        
    };

    const{isLoading, data: country, isError, error} = 
    useQuery({
      queryFn: getCountry
    })
  
    if (isLoading) return <div>Cargando...</div>
  else if(isError) return <div>Error: {error.message}</div>


const dataclient = (e) => {
 
handleSubmit(e)
 toggle()
 sendHandler(e)
 
}


return(

  <div class="formregister" >
    <form class="row g-3 " enctype="multipart/formdata" onSubmit={dataclient} id="formclient">
      <h1 class="text-center">Completa tus Registros</h1>
  
  <div class="col-2">
    <label for="validationDefault01" class="form-label" htmlFor="">Codigo de referido</label>
  </div>
  <div class="col-8">
    <input type="text" class="form-control" id="" name="" onChange={(e) =>validarCaracter(e.target)}  required />
  </div>
  <div class="col-2">
    <button class="btn btn-primary" type="submit" data-bs-toggle="collapse" href="#collapseExample"  >Verificar</button>
  </div>

<hr />
  <div class="col-md-3">
    <label for="validationDefault01" class="form-label" htmlFor="firstname">Nombre</label>
    <input type="text" class="form-control" id="firstname" name="firstname" onChange={(e) =>validarCaracter(e.target)}  required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault02" class="form-label" htmlFor="lastname">Apellido</label>
    <input type="text" class="form-control" id="lastname" name="lastname" onChange={(e) =>validarCaracter(e.target)}  required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault02" class="form-label" htmlFor="email">Correo</label>
    <input type="email" class="form-control" id="email" name="email" required />
  </div>
  <div class="col-md-2">
    <label for="validationDefault04" class="form-label">País</label>
    <select class="form-select" id="validationDefault04" onChange={(e) => validarCountry(e.target)} required>
      
      <option selected disabled >Choose...</option>
      {country.map(countrys =>(
        <option value={countrys.telephoneprefix}>{countrys.countryname}</option>
      )) }
      
    </select>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label" htmlFor="whatsappnumber" >WhatsApp</label>
    <div class="input-group">
      <div className="col-2">
      <input className="prefix" type="text" id="codpais" name="codpais" disabled/>
      </div>
      <div className="col-8">
      <input placeholder="123" type="text" class="form-control" id="whatsappnumber" aria-describedby="inputGroupPrepend2" name="whatsappnumber" onChange={(e) => validarNumero(e.target)} required />
      </div>
    </div>
  </div>
  
  <div class="col-md-6">
    <label for="validationDefault05" class="form-label" htmlFor="paymentwallet">Hash de tu wallet</label>
    <input type="text" class="form-control" id="paymentwallet" name="paymentwallet" onChange={(e) => validarHash(e.target)} required />
  </div>
  <div class="col-md-4">
  <label for="formFile" class="form-label" htmlFor="walletimgfile">Imagen del hash de tu wallet</label>
  <input class="form-control" type="file" onChange={(e) => selectedHandler(e.target)} id="walletimg"   name="walletimg"  required/>
  <input type="text" class="oculto form-control" id="walletimgfile" name="walletimgfile" required />
  <img id="imgwallet" class="img-fluid"></img>
  
</div>
<div class="col-md-4">
  <label for="formFile" class="form-label" htmlFor="imgdnireqfile">Imagen de tu documento de identidad</label>
  <input class="form-control" type="file" id="imgdnireq" onChange={(e) => selectedHandler1(e.target)} name="imgdnireq" required/>
  <input type="text" class="oculto form-control" id="imgdnireqfile" name="imgdnireqfile" required />
  <img id="imgdni" class="img-fluid"></img>
</div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label class="form-check-label" for="invalidCheck2">
       Términos y condiciones
      </label>
    </div>
  </div>

  <div class="col-12">
    <button class="btn btn-primary" type="submit" data-bs-toggle="collapse" href="#collapseExample"  >Terminar Registro</button>
  </div>

  <hr />

</form>

<Modals active={active} toggle={toggle} >
      <CorrectClients />
</Modals>
</div>
)
      }

export default formdataClients