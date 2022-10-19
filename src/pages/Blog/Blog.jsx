import React from 'react';
import FargoBlog from "../../components/FargoBlog/FargoBlog";

function Blog({blogData}) {

  const fargoBlogData = blogData.fargoBlogData;
  return (
    <div className={"blog"}>
      <FargoBlog fargoBlogData={fargoBlogData}></FargoBlog>
    </div>
  );
}

export default Blog;