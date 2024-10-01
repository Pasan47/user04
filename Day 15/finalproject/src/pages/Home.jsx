import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToAddPost = () => {
    navigate("/AddPost");
  };
  const gotoEditPost = () => {
    navigate("/EditPost");
  };
  const gotoLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={goToAddPost}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            Go to Add Post
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={gotoEditPost}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            Go to Edit Post
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={gotoLogin}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            Display Users
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
