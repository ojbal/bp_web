import axios from "axios";

const clientsApi = axios.create({
    baseURL: "https://api.crypto-friendly.net/"
    //baseURL: "http://localhost:3000/"
})
export const getCients = async () => {
    const res = await clientsApi.get("/users");
    return res.data;
}

export const getCountry = async () => {
    const res = await clientsApi.get("/country");
    return res.data;
}

export const createClient = (clients) => clientsApi.post("/users",clients);

export const createPurchase = (purchase) => clientsApi.post("/purchase",purchase);

export const createTicketsPurchase = (purchasetickets) => clientsApi.post("/ticketspurchase",purchasetickets);

export const getRaffle = async() => {
    const res = await clientsApi.get("/raffle");
    return res.data;
}

export const upload = (Upload) => clientsApi.post("/upload",file)


export const getTicketsPurchase = async() => {
    const res = await clientsApi.get("/ticketspurchase");
    return res.data;
}

export default clientsApi