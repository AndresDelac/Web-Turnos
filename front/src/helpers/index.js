import axios from "axios";
export async function getAllAppointments(){
    const response = await axios.get('http://localhost:8080/appointments')
    return response.data
}

export async function getAppointmenById(id){
    const response = await axios.get(`http://localhost:8080/appointments/${id}`)
    return response.data
}

export async function postAppointment(appointment){
    const response = await axios.post('http://localhost:8080/appointments/schedule', appointment)
    return response.data
}

export async function deleteAppointment(id){
    const response = await axios.delete(`http://localhost:8080/appointments/${id}`)
    return response.data
}

export async function getUsers(){
    const response = await axios.get('http://localhost:8080/users')
    return response.data
}

export async function getUserById(id){
    const response = await axios.get(`http://localhost:8080/users/${id}`)
    return response.data
}

export async function postUser(user){
    const response = await axios.post('http://localhost:8080/users/register', user)
    return response.data
}

export async function postUser(user){
    const response = await axios.post('http://localhost:8080/users/login', user)
    return response.data
}