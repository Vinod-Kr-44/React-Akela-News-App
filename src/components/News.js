import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
   
     static defaultProps={
        country:'in',
        pageSize:5,
        category:'health'
    };

    PropTypes={
        country:PropTypes.string,
        pageSize:PropTypes.string,
        category:PropTypes.string
    }

    constructor() {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false});
    }

    handlePrevious = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true})
        let data =await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            articles:parseData.articles,
            page:this.state.page-1,
            loading:false
        });
    }
    handleNext= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true})
        let data =await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            articles:parseData.articles,
            page:this.state.page+1,
            loading:false
        });
    }
   

  render() {
    return (
      <div className='container my-3'>
        <h3 className='text-center'>Akela News - Top Headlines</h3>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {this.state.articles.map((element)=>{
                return  <div className='col-md-3' key={element.url} >
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
            })}
           
        </div>

        <div className='container d-flex justify-content-between my-3'>
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevious} >&larr; Previuos</button>
            <button type="button" className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News
