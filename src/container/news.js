import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/index';
import { formatDistance } from 'date-fns';

import './news.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.articles = [];
    }

    componentDidMount() {
        this.props.getNews();
    }

    // renderNews(newsItem){
    //     newsItem.articles.map((item) => {
    //         return (
    //             <h1>{item.title}</h1>
    //         );
    //     })
    // }


    render() {
        return (
            <div className='news-container'>
                {
                    this.props.news.map((newsItem) => {
                        return (
                            newsItem.articles.map((item, i) => {
                                return (
                                    <a href={item.url}>
                                        <article key={i} className='news-card'>
                                            {item.urlToImage &&
                                                <img src={item.urlToImage} className='news-card__image' />
                                            }
                                            <div className='news-card__content'>
                                                <div className="news-card__meta">
                                                    <p>{`${item.source.name} -  ${formatDistance(item.publishedAt, new Date())} ago`}</p>
                                                </div>
                                                <h2 className="news-card__title">{item.title}</h2>
                                                <p className="news-card__description">{item.description ? item.description.substring(0, 144) + "..." : ""}</p>
                                            </div>
                                        </article>
                                    </a>
                                );
                            })
                        )
                    })
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        news: state.news
    };
}


export default connect(mapStateToProps, { getNews })(News);