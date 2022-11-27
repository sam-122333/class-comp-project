import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=4c3ed9afd011468b889497234b343046&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  // const componentDidMount = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=4c3ed9afd011468b889497234b343046&page=1&pageSize=${props.pageSize}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(parsedData.articles);
  //   setLoading(false);
  //   setTotalResults(parsedData.totalResults);
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=4c3ed9afd011468b889497234b343046&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <div className="container my-5">
      {console.log("render return")}
      <h2 style={{ marginTop: "70px" }}>Top Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-3" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.propTypes = {
  pageSize: PropTypes.number,
};
News.defaultProps = { category: "health", pageSize: 3 };
export default News;

// `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4c3ed9afd011468b889497234b343046&page=1`;
