import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_FLASK = 'http://localhost:8085';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchEmployees = async () => {
  try {
      const response = await fetch(`${API_FLASK}/employees`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return await response.json();
  } catch (error) {
      console.error('Fetch error: ', error);
      return [];
  }
};
