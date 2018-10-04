import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/index';
import './news.css';

class News extends Component{
    constructor(props){
        super(props);
        this.articles = [];
    }

    componentDidMount(){
        this.props.getNews();
    }

    // renderNews(newsItem){
    //     newsItem.articles.map((item) => {
    //         return (
    //             <h1>{item.title}</h1>
    //         );
    //     })
    // }


    render(){
        return(
            <div className='container'>
            {
                    this.props.news.map((newsItem) => {
                        return( 
                            newsItem.articles.map((item,i) => {
                            return ( 
                             <div key={i} className='news-item'>
                                <div className='row'>
                                    <div className='col-sm-3'><img src={item.urlToImage} className='img-thumbnail'/></div>
                                    <div className='col-sm-9'>
                                        <h4>{item.title}</h4>
                                        <p>{item.source.name}</p>
                                        <p>{item.publishedAt}</p>
                                        <p>{item.description +"..."}<a href={item.url}> <i></i>Read More</a></p>
                                    </div>
                                </div>
                             </div>
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


export default connect(mapStateToProps, {getNews})(News);