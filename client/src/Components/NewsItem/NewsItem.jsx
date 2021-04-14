import React from 'react';
import './NewsItem.css';

const NewsItem = ({ item, index }) => {
  const { author, title, urlToImage } = item;
  const formatedTitle = title.split(' ');

  return (
    <div className={index === 0 ? 'newsitem-div-big-card' : 'newsitem-div-card'}>
      <h3 className="newsitem-h3-padding">
        {formatedTitle[0] === '[Перевод]' ? formatedTitle.slice(1).join(' ') : formatedTitle.join(' ')}
      </h3>
      <div
        className="newsitem-div-img"
        style={{
          backgroundImage: `url(${urlToImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <p>
        Автор:
        {author}
      </p>
    </div>
  );
};

export default NewsItem;
