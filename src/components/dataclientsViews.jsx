import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {getCients} from "../api/clientsApi";
import "../css/style.css"

function dataclientsViews () {

  const{isLoading, data: clients, isError, error} = 
  useQuery({
    queryFn: getCients
  })

  if (isLoading) return <div>Cargando...</div>
else if(isError) return <div>Error: {error.message}</div>
 

  return (
    <div class="tableviewclients">
     <table class="">
      <thead>
        <tr>
          <th>Hash</th>
          <th>Monto</th>
          <th>Cantidad ticket</th>
          <th>Número de tickets</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client =>(
        <tr>
          <th  >{client.hash}</th>
          <th >{client.amount}</th>
          <th >{client.ticketnumber}</th>
          <th >{client.ticketnumbers}</th>

        </tr>
    ))}
      </tbody>
      </table>
    </div>
    
  )
    
}

export default dataclientsViews