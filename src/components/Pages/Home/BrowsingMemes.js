import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../../hooks/useFetch';
import { toast, ToastContainer } from 'react-toastify';
import photoError from '../../../assets/error.png';

function BrowsingMemes() {
  const [page, setPage] = useState(1);
  const [ratings, setRatings] = useState({});
  const memeColections = useFetch(`https://api.reykez.pl/api/memes/memes?page=${page}&limit=10&sort%5Bfield1%5D=asc&sort%5Bfield%5D=desc`).data?._embedded?.items;

  function handlePageChange(direction) {
    setPage((prevPage) => prevPage + direction);
    window.scrollTo(0, 0);
  }

  function handleLike(memeId) {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [memeId]: prevRatings[memeId] ? prevRatings[memeId] + 1 : 1
    }));
    toast.success('Great,you addes voice', { autoClose: 1000 });
  }

  function handleDislike(memeId) {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [memeId]: prevRatings[memeId] ? prevRatings[memeId] - 1 : -1
    }));
    toast.success('Great,you addes voice', { autoClose: 1000 });
  }

  if (!memeColections) {
    toast.warn('Oops we have a problem, no meme available, please contact support', { autoClose: 5000 });

    return (
      <div className="flex pt-20 justify-center items-center border shadow-md min-h-[85vh] border-gray-700 bg-gray-700">
        <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />
        <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </div>
    );
  }

  return (
    <InfiniteScroll dataLength={10} hasMore={true} className=" bg-gray-700 max-w-32 shadow-lg flex flex-col justify-center items-center ">
      <p className="text-white right-5 top-16 hidden md:block absolute p-2 bg-orange-700 rounded-lg">you are on {page} page</p>
      {memeColections?.map((meme) => (
        <>
          <div key={meme.id} className="m-4 bg-gray-400 rounded-lg shadow-lg">
            {meme.url.endsWith('.mp4') || meme.url.endsWith('.avi') ? <video className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={meme.url} alt="random meme video" controls></video> : <img loading="lazy" className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={meme.url} alt="random meme" />}
          </div>
          <div className="flex mb-10">
            <button onClick={() => handleLike(meme.id)} className="px-4 py-2 bg-green-700 text-white rounded-full shadow-lg">
              + ({ratings[meme.id] || 0})
            </button>
            <button onClick={() => handleDislike(meme.id)} className="px-4 py-2 bg-red-700 text-white rounded-full shadow-lg">
              - ({ratings[meme.id] || 0})
            </button>
          </div>
        </>
      ))}
      <div className="flex mt-4 justify-center mb-6">
        <button className=" bg-orange-500 disabled:opacity-30 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full" onClick={() => handlePageChange(-1)} disabled={page === 1}>
          Previous page
        </button>
        <button className=" bg-orange-500 disabled:opacity-30 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full ml-4" onClick={() => handlePageChange(1)} disabled={page === 646}>
          Next page
        </button>
      </div>
      <p className="text-white right-0 bottom-0 relative p-2 bg-orange-700 rounded-lg">you are on {page} page</p>
      <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </InfiniteScroll>
  );
}

export default BrowsingMemes;
