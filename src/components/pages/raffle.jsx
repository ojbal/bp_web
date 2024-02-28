import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRaffle }  from "../../api/clientsApi";
import '../../css/style.css'

function raffle () {
   
    const{isLoading, data: raffle, isError, error} = 
    useQuery({ 
      queryFn: getRaffle
    })
  
    if (isLoading) return <div>Cargando...</div>
    else if(isError) return <div>Error: {error.message}</div>
  
   
   
    return(
    <div>
    <h1 className="text-center">En esta seccion publicaremos a los ganadores</h1>
        <div className= "raffle container ">
            

            <div className="col-xl-12 col-sm-12" >
            <div className="row ">
                <div className="col-xl-4 col-sm-12">
                    <img src="../../public/logo.gif" alt="" srcset=""  className="img-fluid"/>
            </div>
    <div className="col-xl-8  col-sm-12 raffle-text">
      <div className="card-body">
        <h1 className="card-title">Crypto Friendly</h1> <br /> 
       
        <span>Valor del Boleto USDT 5.00</span> <br />
        <span>Compra mínima USDT 50.00</span> <br />
        <span>Número de boleto por compra minima 10</span> <br />
      <span >Total de boletos 30,000</span> <br />

            
      
       
      </div>
    </div>
  </div>
</div>
            
            
            

</div>
        </div>
    )
}
export default raffle