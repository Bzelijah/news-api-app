import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterestingNews } from '../../Store/ActionCreators/NewsAC';
import NewsItem from '../NewsItem/NewsItem';
import './interestingNews.css';

const InterestingNews = () => {
    const [firstCategory, setFirstCategory] = useState('Russia');
    const [secondCategory, setSecondCategory] = useState('Coronavirus');
    const [thirdCategory, setThirdCategory] = useState('Techno');

    const interestingNews = useSelector((state) => state.interestingNews);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInterestingNews(firstCategory, secondCategory, thirdCategory));
    }, []);

    return (
        <div className="interesting-all-news-div-container-cards">
            <div className="interestingNews-div-container-cards">
                    {interestingNews.first.edit === false
                        ? <h3>{firstCategory}</h3>
                        : (
                            <form onSubmit={(e) => setFirstCategory(e.target.value)}>
                                <input placeholder="Введите название категории" type="text" />
                                <button type="submit">Сохранить</button>
                            </form>
                        )}
                <div className="interestingNews-div-container-cards">
                    {interestingNews.first.content
                        .map((newsItem, index) => (
                            <NewsItem
                            key={Math.random()}
                            item={newsItem}
                                index={index}
                            />
                        ))}
                </div>
            </div>
            <div className="interestingNews-div-container-cards">
                    {interestingNews.second.edit === false
                        ? <h3>{secondCategory}</h3>
                        : (
                            <form onSubmit={(e) => setSecondCategory(e.target.value)}>
                                <input placeholder="Введите название категории" type="text" />
                                <button type="submit">Сохранить</button>
                            </form>
                        )}
                <div className="interestingNews-div-container-cards">
                    {interestingNews.second.content
                        .map((newsItem, index) => (
                            <NewsItem
                                key={Math.random()}
                                item={newsItem}
                                index={index}
                            />
                        ))}
                </div>
            </div>
            <div className="interestingNews-div-flex-column">
                    {interestingNews.third.edit === false
                        ? <h3>{thirdCategory}</h3>
                        : (
                            <form onSubmit={(e) => setThirdCategory(e.target.value)}>
                                <input placeholder="Введите название категории" type="text" />
                                <button type="submit">Сохранить</button>
                            </form>
                        )}
                <div className="interestingNews-div-container-cards">
                    {interestingNews.third.content
                        .map((newsItem, index) => (
                            <NewsItem
                                key={Math.random()}
                                item={newsItem}
                                index={index}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default InterestingNews;
