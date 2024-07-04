import React, { Component } from 'react'

export class NewsItem extends Component {
  
  
  render() {
    let {title,description,imageurl,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageurl ? imageurl : "https://www.androidauthority.com/wp-content/uploads/2024/06/Sci-fi-wallpaper-on-smartphone.jpg"} className="card-img-top" alt="..."/><span class="badge text-bg-warning">{source}</span>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsurl} target="_blank" className="btn btn-dark">Read more...</a>
              <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
