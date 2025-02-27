import axios from 'axios';

const API_FLASK = 'http://localhost:8085';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_FLASK}/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
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
