import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date } = this.props;
    return (
      <div className="my-2">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
            }
            alt="missing"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{description}.....</p>
            <div className="card-text">
              <small className="text-muted">
                by {author ? author : "unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a href={url} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
