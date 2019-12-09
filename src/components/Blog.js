import React from "react";

const Blog = () => {
  return (
    <div className="blog-public" id="conponent-body">
      <div className="card-blog">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={require("../img/1article-aromatherapie.jpg")}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="card-date-author">
                  <p className="card-text">Date:</p>
                  <p className="card-text">Auteur:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-blog">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={require("../img/1article-aromatherapie.jpg")}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="card-date-author">
                  <p className="card-text">Date:</p>
                  <p className="card-text">Auteur:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
