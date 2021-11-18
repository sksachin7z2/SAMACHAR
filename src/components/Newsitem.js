import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let { title, description ,imageUrl,newsUrl,publishedAt,author,source} = this.props;
    return (
      
        
       
        <div className="card" style={{ width: "18rem",height:"25rem" ,overflowY:"scroll",overflowX:"clip"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5><span  className="badge badge-info">{source}</span>
            <p>-By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</p>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary my-2">
             Read More
            </a>
          </div>
        </div>
     
    );
  }
}

export default Newsitem;
