import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/index";
import "./news.css";

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
                        const publishDate = new Date(
                            item.publishedAt
                        ).toLocaleDateString();
                        return (
                            <div key={i} className="news-item">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img
                                            src={item.urlToImage}
                                            className="image"
                                        />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>{item.title}</h4>
                                        <p className="source-text">
                                            Posted via {item.source.name}
                                        </p>
                                        <p className="published-text">
                                            Published on {publishDate}
                                        </p>
                                        <p className="description-text">
                                            {item.description}
                                        </p>
                                        <a
                                            className="article-link"
                                            href={item.url}
                                        >
                                            <button className="source-btn btn btn-primary">
                                                Read more
                                            </button>
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

export default connect(mapStateToProps, { getNews })(News);
