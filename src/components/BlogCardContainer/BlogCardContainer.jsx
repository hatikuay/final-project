import React from 'react';
import "./BlogCardContainer.scss"
import BlogCard from "../BlogCard/BlogCard";
import {Link} from "react-router-dom";
import "./BlogCardContainer.scss"
function BlogCardContainer({blogCardContainerData}) {
  return (
    <div className={"blog-container"}>
      <div className={"blog"}>
        <BlogCard props = {blogCardContainerData}></BlogCard>
      </div>

      <div className={"text-right"}>
        <Link to = "/blog">BLOĞUMUZA GÖZ ATIN</Link>
        <img src={"https://captainfargo.com/static/main/ic-right-arrow.179f968435bb.svg"}/>
      </div>
    </div>
  );
}

export default BlogCardContainer;
