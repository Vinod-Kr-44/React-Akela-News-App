import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewsItem extends Component {

  render() {
   const {title,description,imageUrl,newsUrl,author,date} = this.props;
    
    return (
      <div>
       <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} target='_blank' className="btn btn-sm btn-primary">read more</Link>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
