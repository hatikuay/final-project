import React from 'react';
import "./BlogCard.scss"

function BlogCard(data) {

  return (
    <div className={"blog-container"}>
      <h3 className={"section-title"}>CAPTAIN FARGO BLOG</h3>
      <div className={"blog-card-row"}>
        {data.props.map((blogCard, index) => {
          return (
            <div key={index} className={"blog-card"}>
              <img className={"blog-card-image"} src={blogCard.image}/>
              <h3>{blogCard.title}</h3>
              <p>{blogCard.desc}</p>

            </div>
          )
        })}
      </div>
    </div>
  );
}

export default BlogCard;