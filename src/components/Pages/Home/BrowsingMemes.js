import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../../hooks/useFetch';
import { toast, ToastContainer } from 'react-toastify';
import photoError from '../../../assets/error.png';
import { FadeLoader } from 'react-spinners';
import { TfiArrowUp } from 'react-icons/tfi';

function BrowsingMemes() {
  const [limit, setLimit] = useState(10);
  const [ratings, setRatings] = useState({});
  const [showArrow, setShowArrow] = useState(false);

  const loadMoreMemes = () => {
    setLimit(limit + 5);
  };
  const memeColections = useFetch(`https://api.reykez.pl/api/memes/memes?page=1&limit=${limit}`, limit)?.data?._embedded?.items;

  function handleVoice(memeId, isLike) {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [memeId]: isLike ? (prevRatings[memeId] || 0) + 1 : (prevRatings[memeId] || 0) - 1
    }));
    toast.success(isLike ? 'You like it' : "You don't like it", { autoClose: 1000 });
    //TODO tu request do API
  }

  const handleScroll = () => {
    if (window.pageYOffset > 50 && !showArrow) {
      setShowArrow(true);
    } else if (window.pageYOffset <= 50 && showArrow) {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <>
      <InfiniteScroll dataLength={memeColections.length} hasMore={true} next={loadMoreMemes} scrollThreshold={0.99} loader={<FadeLoader className="text-red-600 mb-4" color="orange" />} className=" bg-gray-700 max-w-32 shadow-lg flex flex-col justify-center items-center ">
        {memeColections?.map((meme) => (
          <div key={meme.id}>
            <div className="m-2 bg-gray-400 rounded-lg shadow-lg">{meme.url.endsWith('.mp4') || meme.url.endsWith('.avi') ? <video className="rounded-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={meme.url} alt="random meme video" controls></video> : <img loading="lazy" className="rounded-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 md:rounded border-4" src={meme.url} alt="random meme" />}</div>
            <div className="flex mb-8 mx-2">
              <button onClick={() => handleVoice(meme.id, true)} className="hover:bg-green-400 border-b-4 border-green-800 hover:border-green-500 px-2 font-bold bg-green-700 text-white rounded shadow-lg">
                +
              </button>
              <button onClick={() => handleVoice(meme.id, false)} className="mx-1 hover:bg-red-400 border-b-4 border-red-800 hover:border-red-500 px-[10px] font-bold bg-red-700 text-white rounded shadow-lg">
                -
              </button>
              <p className="px-[10px] bg-black text-white font-bold rounded"> {ratings[meme.id] || 0}</p>
            </div>
          </div>
        ))}
        <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </InfiniteScroll>
      {showArrow && (
        <div className="fixed right-0 bottom-0 m-6">
          <button onClick={handleClick} className="mx-1 py-2 hover:bg-gray-400 border-b-4 border-gray-400 hover:border-gray-500 px-[10px] font-bold bg-gray-200 rounded shadow-lg">
            <TfiArrowUp className="text-black" />
          </button>
        </div>
      )}
    </>
  );
}

export default BrowsingMemes;
