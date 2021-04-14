import 'dotenv';
import { GET_NEWS } from '../Types/News';

const API_KEY = process.env.REACT_APP_API_KEY;

function addNewsInStore(news) {
  return {
    type: GET_NEWS,
    payload: news,
  };
}

const getNews = () => async (dispatch) => {
  const date = new Date();
  const formatedDate = `${date.getFullYear()}-${date.getMonth() < 10 ? 0 + String(date.getMonth()) : date.getMonth()}-${date.getDate() < 10 ? String(date.getDate()) : date.getDate()}`;
  const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=${formatedDate}&sortBy=popularity&apiKey=${API_KEY}&language=ru`);
  const news = await response.json();
  console.log(news.articles);
  dispatch(addNewsInStore(news.articles));
};

export default getNews;
