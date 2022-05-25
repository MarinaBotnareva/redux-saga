import axios from 'axios';

export const registerUser = async (user) => {
    const response = await axios.post('http://localhost:5000/api/register', user);

    return response.data;
}

/* 
    promise = axios.post()
    result = await axios.post()

    promise.then(result => {

    })

    response = await fetch('')
    data = await response.json()

    fetch('')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        
    })

    
*/
