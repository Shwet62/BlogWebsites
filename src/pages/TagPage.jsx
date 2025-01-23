import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div className="p-4 pt-20"> {/* Added pt-20 to create space for the fixed header */}
        <button
          onClick={() => navigation(-1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all duration-300 shadow-lg mb-6 flex items-center gap-x-2"
        >
          <span className="text-lg">← Back to Blogs</span>
        </button>
        <h2 className="text-xl font-bold mt-4">
          Blogs Tagged <span className="text-blue-600">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
