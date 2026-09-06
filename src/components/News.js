import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor() {
        super();
        this.state={
            articles:[],
            loading:false
        }
    }

    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3a3e211534014c0caf7eca95828ef9ab';
        let data =await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles});
    }

  render() {
    return (
      <div className='container my-3'>
        <h3>Top Headlines</h3>
        <div className='row'>
            {this.state.articles.map((element)=>{
                return  <div className='col-md-3' key={element.url} >
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
            })}
           
        </div>
        
      </div>
    )
  }
}

export default News
