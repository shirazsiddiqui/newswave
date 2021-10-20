// import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2018/10/US-Dollar-emerging-markets-770x433.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title} 
                 </h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
                <p className="card-text"><small className="text-muted">By {!source?"Unknown": source} on {new Date(date).toGMTString()}</small></p>
            </div>
            </div>
        )
    }
}

export default NewsItem
