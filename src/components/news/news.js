import './news.css';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

const News = () => {
  const news = useSelector(state => state.news.value);
  const [innerSub, updateInnerSub] = useState([]);

  useEffect(() => {
    updateInnerSub(news);
  },[news]);

  return(
    <>
      <div className="main-body-news">
        <h1>Latest News</h1>
        {
          innerSub.map((item, index) => {
            return (
              <div className="sub-inner-block" key={index}>
                <h3>{item.title}</h3>
                <div className="dates"><em>{item.date}</em></div>
                <div>{item.description}</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default News;
