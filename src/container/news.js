import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/index';
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
      <div className="container">
        {this.props.news.map(newsItem => {
          return newsItem.articles.map((item, i) => {
            return (
              <div key={i} className="news-item">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <img
                      src={item.urlToImage}
                      className="image"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <h4>{item.title}</h4>
                    <p>{item.source.name}</p>
                    <p>{item.publishedAt}</p>
                    <p>{item.description}</p>
                    <a href={item.url} target="_blank">
                      <button className="btn btn-primary">Go to source</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

export default connect(
  mapStateToProps,
  { getNews }
)(News);
