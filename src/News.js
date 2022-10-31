import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <Newsitem title="Title 1" discription="myDisc" />
          </div>
          <div className="col-md-4 mb-3">
            <Newsitem title="Title 2" discription="myDisc" />
          </div>
          <div className="col-md-4 mb-3">
            <Newsitem title="title 3" discription="myDisc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
