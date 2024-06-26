import React from 'react';
import './article.css';

const Article = ({imgUrl, date , text}) => (
  <div className='gpt3__blog-container_article'>
    <div className='gpt3__blog-container_article-image'>
      <img src={imgUrl} alt="blog" />
    </div>

<div className='gpt3__blog-container_article-content'>
  <p>{date}</p>
  <h3>{text}</h3>
</div>

  <p>Read full Article</p>
  </div>
)
  

export default Article
