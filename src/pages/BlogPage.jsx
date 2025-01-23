import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="p-4 pt-20"> {/* Added pt-20 to create space for the fixed header */}
        {/* Back Button */}
        <button
          onClick={() => navigation(-1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all duration-300 shadow-lg mb-6 flex items-center gap-x-2"
        >
          <span className="text-lg">← Back to Blogs</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-2xl text-blue-600 animate-pulse">Loading...</p>
        </div>
      ) : blog ? (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <BlogDetails post={blog} />
          <h2 className="text-2xl font-bold mt-8 mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedblogs.map((post) => (
              <div key={post.id} className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition-all duration-300">
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-2xl text-red-600">No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
