import React, { Component } from "react";

const Article = ({ title, text, author, date, truncateSize, col }) => {
  const truncate = (source, size) =>
    source.lenght > size ? source.slice(0, size - 1) + "..." : source;
  return (
    <div className={`col-${col} mb-3`}>
      <div className="card">
        {/* <img src="{ image }" alt="image article">
        {image}
      </img> */}
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            {truncateSize ? truncate(text, truncateSize) : text}
          </p>
          <p className="card-author">
            <small className="text-muted"> {author} </small>
          </p>
          <p className="card-date">
            <small className="text-muted"> {date} </small>
          </p>
        </div>
      </div>
    </div>
  );
};

class AdminHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { limit } = this.props;
    axios
      .post("http://localhost:8081/articles/show", {
        limit
      })
      .then(response => {
        this.setState({ articles: response.data });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3 mb-3">
          <div className="card-deck">
            {articles.map(article => {
              const date = new Date(article.date);
              return (
                <Article
                  key={article._id}
                  title={article.title}
                  text={article.text}
                  author={article.author}
                  date={date.toDateString()}
                  truncateSize={truncateSize}
                  col={col}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;
