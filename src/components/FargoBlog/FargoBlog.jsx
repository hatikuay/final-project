import React from 'react';
import BlogCard from "../BlogCard/BlogCard";
import "./FargoBlog.scss"

function FargoBlog({fargoBlogData}) {
  return (
    <div className={"fargo-blog"}>
      <div className={"blog"}>
        <BlogCard props = {fargoBlogData}></BlogCard>
      </div>
    </div>
  );
}

export default FargoBlog;