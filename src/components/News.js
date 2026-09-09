import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "health",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category} - News`;
  }

  async componentDidMount() {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data =await fetch(url);
    // let parseData=await data.json();
    // console.log(parseData);
    // this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false});

    this.updateNews();
  }

   updateNews= async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  fetchMore = async ()=>{
    this.setState({page:this.state.page+1});
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    });
  }

  handlePrevious = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true})
    // let data =await fetch(url);
    // let parseData=await data.json();
    // console.log(parseData);
    // this.setState({
    //     articles:parseData.articles,
    //     page:this.state.page-1,
    //     loading:false
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNext = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a3e211534014c0caf7eca95828ef9ab&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true})
    // let data =await fetch(url);
    // let parseData=await data.json();
    // console.log(parseData);
    // this.setState({
    //     articles:parseData.articles,
    //     page:this.state.page+1,
    //     loading:false
    // });
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-10">
        <h3 className="text-center" style={{marginTop:'90px'}}>
          Akela News - Top {this.props.category} headlines
        </h3>

        {this.state.loading && <Spinner />}

      {/* <div id="scrollableDiv" style={{ height: 400, overflow: 'auto' }}> */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          // scrollableTarget="scrollableDiv"
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      {/* </div>   */}

        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Previuos
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
