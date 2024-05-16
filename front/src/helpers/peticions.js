import axios from "axios";
export async function getAllAppointments() {
    const response = await axios.get(`http://localhost:8080/appointments`);
    return response.data;
  }

export async function getAppointmenById(id){
    const response = await axios.get(`http://localhost:8080/appointments/${id}`)
    return response.data
}

export async function postAppointment(appointment, id){

    const response = await axios.post(`http://localhost:8080/appointments/schedule`, {...appointment, userId: id})
    console.log(response);
    return response.data
}

export async function updateAppointment(id){
    const response = await axios.put(`http://localhost:8080/appointments/cancel/${id}`)
    return response.data
}

export async function getUsers(){
    const response = await axios.get('http://localhost:8080/user')
    return response.data
}

export async function getUserById(id){
    const response = await axios.get(`http://localhost:8080/user/${id}`)
    return response.data
}

export async function postUserRegister(user){
    const response = await axios.post('http://localhost:8080/user/register', user)
    console.log(response);
    return response.data
}

export async function logInUser(user){
    const response = await axios.post('http://localhost:8080/user/login', user)
    return response.data
}

//2 21 17