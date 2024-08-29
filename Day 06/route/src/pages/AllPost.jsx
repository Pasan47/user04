import React from 'react';
import { Link } from 'react-router-dom';

const AllPost = () => {

    const parameter = 'New Parameter';
    const NewApp = 'New APP';


  return (
    <>
      <div className="flex flex-col items-center p-8">
         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            All Post
        </h1>
        <div className="flex justify-center">
        <Link to={`/EditPost/${parameter}`}>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded"
          type="button"
        >
          Edit Post
        </button>
        </Link>
        <Link to={`/AppPost/${NewApp}`}>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4rounded"
          type="button"
        >
          App Post
        </button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default AllPost
