import React from 'react';

function NewsArticle({item}) {
    return(
        <div>
            
            <h2>{item.title}</h2>
            <a href={item.url}><img className='news-img' src={item.urlToImage} /></a>
        </div>
    );
}

export default NewsArticle;
