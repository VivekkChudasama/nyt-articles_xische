import axios from 'axios';

const API_KEY = 'WKmgfvV4HoykqtQRB2L0QUqH3hbkXU8i';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchArticles = async (days = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/${days}.json?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
