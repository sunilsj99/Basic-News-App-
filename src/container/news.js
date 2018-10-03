import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/index";
import "./news.css";

class News extends Component {
  state = {
    loading: true
  };

  componentDidMount = async () => {
    await this.props.getNews();
    this.setState({ loading: false });
  };

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
        {!this.state.loading ? (
          this.props.news.map(newsItem => {
            return newsItem.articles.map((item, i) => {
              const date = new Date(item.publishedAt);

              return (
                <div key={i} className="news-item">
                  <div className="news-pic">
                    {item.urlToImage ? (
                      <img
                        src={item.urlToImage}
                        className="image"
                        alt="No Photo available"
                      />
                    ) : (
                      <div className="placeholder">No Photo available</div>
                    )}
                  </div>

                  <div className="news-info">
                    <h4>{item.title}</h4>
                    <p className="source">{item.source.name}</p>
                    <p>{date.toLocaleDateString()}</p>
                    <p>{item.description}</p>
                    <a className="button-holder" href={item.url}>
                      <button className="btn btn-primary">Go to source</button>
                    </a>
                  </div>
                </div>
              );
            });
          })
        ) : (
          <div
            className={`spinner-container ${
              this.state.loading ? "spinner" : ""
            }`}
          />
        )}
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
