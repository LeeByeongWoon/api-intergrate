import Axios from "axios";

export async function getUsers() {
    const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

export async function getUser(id: number) {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}