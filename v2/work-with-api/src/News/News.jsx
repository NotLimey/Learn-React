import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';

function News() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fe305e11da3549c39937280b38bdc58e")
            .then((response) => response.json())
            .then(setData)
        
    }, [])

    console.log(data);
    
    if(data) {
        return(
            <div>
                {data.articles.map((article, i) => {
                    return(
                        <NewsArticle key={article.url} item={article} />
                    )
                })}
            </div>
        );
    }else {
        return(
            <p>Data not found</p>
        )
    };
    
}

export default News;
