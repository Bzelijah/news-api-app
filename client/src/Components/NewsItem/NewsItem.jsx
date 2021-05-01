import React from 'react';
import './NewsItem.css';

const NewsItem = ({ item }) => {
    const {
        // author,
        title,
        urlToImage,
        // content,
        // description,
    } = item;
    let formatedTitle = title.split(' ');
    if (formatedTitle[0] === '[Перевод]') {
        formatedTitle = formatedTitle.slice(1);
    }
    if (formatedTitle.length > 13) {
        formatedTitle = formatedTitle.splice(0, 10).join(' ');
    } else {
        formatedTitle = formatedTitle.join(' ');
    }

    const clickHandler = (e) => {
        console.log(e);
        console.log(item);
    };

    return (
        <div className="newsitem-div-card" id={title} onClick={() => clickHandler(formatedTitle)}>
            <div>
                <h4 className="newsitem-h3-padding">
                    {formatedTitle}
                </h4>
            </div>
            <div
                className="newsitem-div-img"
                style={{
                    backgroundImage: `url(${urlToImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
        </div>
    );
};

export default NewsItem;
