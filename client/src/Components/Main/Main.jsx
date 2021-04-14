import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getNews from '../../Store/ActionCreators/NewsAC';
import NewsItem from '../NewsItem/NewsItem';
import './Main.css';

const Main = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div className="main-div-container-cards">
      {news?.map((newsItem, index) => <NewsItem item={newsItem} index={index} />)}
    </div>
  );
};

export default Main;
