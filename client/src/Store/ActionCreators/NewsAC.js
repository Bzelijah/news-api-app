import 'dotenv';
import { GET_NEWS, GET_INTERESTING_NEWS } from '../Types/News';

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
    dispatch(addNewsInStore(news.articles));
};

function addInterestingNewsInStore(first, second, third) {
    return {
        type: GET_INTERESTING_NEWS,
        payload: {
            first, second, third,
        },
    };
}

const getInterestingNews = (first, second, third) => async (dispatch) => {
    const responseFirst = await fetch(`https://newsapi.org/v2/everything?q=${first}&apiKey=${API_KEY}&language=ru`);
    const responseSecond = await fetch(`https://newsapi.org/v2/everything?q=${second}&apiKey=${API_KEY}&language=ru`);
    const responseThird = await fetch(`https://newsapi.org/v2/everything?q=${third}&apiKey=${API_KEY}&language=ru`);
    const firstParse = await responseFirst.json();
    const secondParse = await responseSecond.json();
    const thirdParse = await responseThird.json();
    dispatch(addInterestingNewsInStore(
        firstParse.articles,
        secondParse.articles,
        thirdParse.articles,
    ));
};

export { getNews, getInterestingNews };
