import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Title */}
      <NavLink
        to={`/blog/${post.id}`}
        className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        {post.title}
      </NavLink>

      {/* Author and Category */}
      <p className="mt-2 text-gray-600 text-sm">
        By <span className="font-semibold text-gray-800">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="text-blue-500 hover:underline"
        >
          {post.category}
        </NavLink>
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-1">Posted on {post.date}</p>

      {/* Content */}
      <p className="mt-4 text-gray-700 text-base leading-relaxed">{post.content}</p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-full transition-all duration-200"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
