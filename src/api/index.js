import axios from 'axios';

export const registerUserRequest = async (user) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    user
  );

  return response.data;
};

export const createTaskRequest = async (task) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    task
  );

  return response.data;
};
