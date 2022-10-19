import React from 'react';
import "./HomeBlog.scss"
function HomeBlog({homeBlogData}) {
    return (
        <div className={"home-blogs"}>
            <div className={"home-blogs-row"}>
                {homeBlogData.map((blog, index) => {
                    return (
                        <div className={"blog"} key={index}>
                            <img className={"blog-image"} src={blog.image}/>
                            <h3>{blog.title}</h3>
                            <p>{blog.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

export default HomeBlog;