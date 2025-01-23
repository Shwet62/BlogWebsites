import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner"

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-10">
      {loading ? (
        // Loading State
        <div className="min-h-[80vh] flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
          <p className="text-center font-bold text-3xl text-blue-600 animate-pulse">
           <Spinner></Spinner>
          </p>
        </div>
      ) : posts.length === 0 ? (
        // Empty State
        <div className="min-h-[80vh] flex justify-center items-center bg-gradient-to-r from-red-50 to-red-100">
          <p className="text-center font-bold text-3xl text-red-600">
            No Blogs Found!
          </p>
        </div>
      ) : (
        // Blog Layout
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out p-6"
            >
              {/* Blog Details */}
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
