import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/index";
import "./news.css";

class News extends Component {
    constructor(props) {
        super(props);
        this.articles = [];

        this.state = { location: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.getNews();
    // }

    handleChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getNews(this.state.location);
        this.setState({ location: "" });
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
                <form className="location-form" onSubmit={this.handleSubmit}>
                    <label>Enter your country (abbreviation)</label>
                    <input
                        type="text"
                        value={this.state.location}
                        placeholder="eg., IN, US, DE"
                        onChange={this.handleChange}
                        name="location"
                    />
                    <button className="location-input-btn btn btn-primary">See News</button>
                </form>
                {this.props.news.map(newsItem => {
                    return newsItem.articles.map((item, i) => {
                        const publishDate = new Date(
                            item.publishedAt
                        ).toLocaleDateString();
                        return (
                            <div key={i} className="news-item">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img
                                            src={item.urlToImage}
                                            className="image"
                                        />
                                    </div>
                                    <div className="col-lg-9">
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
