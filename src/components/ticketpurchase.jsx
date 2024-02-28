import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTicketsPurchase, createTicketsPurchase } from "../api/clientsApi";
import "../css/style.css"

function ticketpurchase() {

    const{isLoading, data: tickets, isError, error} = 
    useQuery({
      queryFn: getTicketsPurchase
    })

    if (isLoading) return <div>Cargando...</div>
    else if(isError) return <div>Error: {error.message}</div>

    const queryClient = useQueryClient();

    const addClientMutation = useMutation({
        mutationFn: createTicketsPurchase,
        onSuccess: () => {
          
            //invalidar cache y refrescar
            queryClient.invalidateQueries("ticketspurchase");
        },
    });
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const clients = Object.fromEntries(formData);
        addClientMutation.mutate(clients)

        e.target.reset()
        
    };



    return(
        <div class="formregister">
            
           <h1>Ingrese su hash para al compra de los boletos</h1>
           <hr />
              <div class="col-md-10">
                <label for="validationDefault05" class="form-label" htmlFor="hash">ingrese su hash para la compra</label>
                <input type="text" class="form-control" id="validationDefault05" name="hash" required />
            </div>
            <div class="col-md-2">
            <button class="btn btn-primary"  data-bs-toggle="collapse" href="#tickets" >validar</button>
            </div>
            <form class="row g-3 " onSubmit={handleSubmit}>
            <div class= "collapse" id="tickets" >
            <label for="validationDefault05" class="form-label" htmlFor="ticketnumber">Tickets Disponibles</label>  
        
            <hr />
            {tickets.map(ticket =>(
                <button class="ticketpurchase" type="submit" name="ticketnumber">{ticket.numero}</button>
            ))}
            </div>
            <hr />

            <label for="validationDefault05" class="form-label" htmlFor="hash">Valor</label>
        <input type="text" class="form-control" id="paymentwallet" name="hash" required />
            </form>
        </div>
    )
}

export default ticketpurchase