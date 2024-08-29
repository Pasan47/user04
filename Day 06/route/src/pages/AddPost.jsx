import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/AllPost'); 
  };


  return (
  <>

<div className="flex flex-col items-center p-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
    Add Post
  </h1>
  <form className="w-full max-w-sm bg-white p-8 rounded shadow-md">
    <div className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-full-name">
          Title
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value="Type your name"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-password">
          Content
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-content"
          type="text"
          placeholder="Add your content"
        />
      </div>


      <div className="flex justify-center">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleButtonClick}
        >
          Create Post
        </button>
      </div>
    </div>
  </form>
</div>


  
  </>
  )
}

export default AddPost
