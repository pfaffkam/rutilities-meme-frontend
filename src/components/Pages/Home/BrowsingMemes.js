import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../../hooks/useFetch';
import { toast, ToastContainer } from 'react-toastify';
import photoError from '../../../assets/error.png';
import { FadeLoader } from 'react-spinners';

function BrowsingMemes() {
  const [limit, setLimit] = useState(10);
  const [ratings, setRatings] = useState({});

  function loadMoreMemes() {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop + clientHeight >= scrollHeight) {
      setLimit(limit + 10);
    }
  }
  const memeColections = useFetch(`https://api.reykez.pl/api/memes/memes?page=1&limit=${limit}`, [limit]).data?._embedded?.items;

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
    <InfiniteScroll dataLength={limit} hasMore={true} next={loadMoreMemes} scrollThreshold={0.99} loader={<FadeLoader className="fixed mb-4" color="orange" />} className=" bg-gray-700 max-w-32 shadow-lg flex flex-col justify-center items-center ">
      {memeColections?.map((meme) => (
        <div key={meme.id}>
          <div className="m-4 bg-gray-400 rounded-lg shadow-lg">{meme.url.endsWith('.mp4') || meme.url.endsWith('.avi') ? <video className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={meme.url} alt="random meme video" controls></video> : <img loading="lazy" className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={meme.url} alt="random meme" />}</div>
          <div className="flex mb-10">
            <button onClick={() => handleLike(meme.id)} className="px-4 py-2 bg-green-700 text-white rounded-full shadow-lg">
              + ({ratings[meme.id] || 0})
            </button>
            <button onClick={() => handleDislike(meme.id)} className="px-4 py-2 bg-red-700 text-white rounded-full shadow-lg">
              - ({ratings[meme.id] || 0})
            </button>
          </div>
        </div>
      ))}
      <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </InfiniteScroll>
  );
}

export default BrowsingMemes;
