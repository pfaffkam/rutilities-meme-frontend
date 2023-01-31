import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../hooks/useFetch';
import { toast, ToastContainer } from 'react-toastify';
import photoError from '../../assets/error.png';
import { FadeLoader } from 'react-spinners';
import { TfiArrowUp } from 'react-icons/tfi';
import { BiCommentAdd } from 'react-icons/bi';
import { withLanguage } from '../../components/HOC/withLanguage';
import Comments from './Comments';
import { useAuth } from '../../hooks/useAuth';

function BrowsingMemes({ texts }) {
  const [limit, setLimit] = useState(10);
  const [ratings, setRatings] = useState({});
  const [showArrow, setShowArrow] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { auth } = useAuth();

  const loadMoreMemes = () => {
    setLimit(limit + 5);
  };
  const memeColections = useFetch(`${process.env.REACT_APP_API_BASE_URL}memes/memes?page=1&limit=${limit}`, limit)?.data?._embedded?.items;

  function handleVoice(memeId, isLike) {
    if (!auth.email) {
      toast.error(`${texts.logIn}`, { autoClose: 1000 });
      return;
    }

    setRatings((prevRatings) => ({
      ...prevRatings,
      [memeId]: isLike ? (prevRatings[memeId] || 0) + 1 : (prevRatings[memeId] || 0) - 1
    }));
    toast.success(isLike ? `${texts.notificationToastSuccesLike}` : `${texts.notificationToastSuccesDisLike}`, { autoClose: 1000 });
    //TODO tu request do API
  }

  const handleScroll = () => {
    if (window.pageYOffset > 50 && !showArrow) {
      setShowArrow(true);
    } else if (window.pageYOffset <= 50 && showArrow) {
      setShowArrow(false);
    }
  };

  const handleComments = (memeId) => {
    setShowComments(memeId);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!memeColections) {
    toast.warn(`${texts.notificationToastWarn}`, { autoClose: 5000 });

    return (
      <div className="flex pt-20 justify-center items-center border shadow-md border-gray-700 bg-gray-700">
        <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />
        <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </div>
    );
  }

  return (
    <InfiniteScroll dataLength={memeColections.length} hasMore={true} next={loadMoreMemes} scrollThreshold={0.89} loader={<FadeLoader className="text-red-600 mb-4" color="orange" />} className="scrollbar-none bg-gray-700 shadow-lg flex flex-col justify-center items-center ">
      {memeColections?.map((meme) => (
        <div className="w-full md:w-[40vw] px-4 bg-black" key={meme.id}>
          <div className="m-2 flex justify-center items-center rounded-lg w-full shadow-lg ">{meme.url.endsWith('.mp4') || meme.url.endsWith('.avi') ? <video className="rounded-lg mb-12 w-full md:rounded object-contain max-h-[70vh] border-4" src={meme.url} alt="random meme video" controls></video> : <img loading="lazy" className="rounded-lg  w-full object-contain mr-3 md:rounded max-h-[70vh] border-4" src={meme.url} alt="random meme" />}</div>
          <div className="flex mb-8 mx-2">
            <button onClick={() => handleVoice(meme.id, true)} className="hover:bg-green-400 border-b-4 border-green-800 hover:border-green-500 px-2 font-bold bg-green-700 text-white rounded shadow-lg">
              +
            </button>
            <button onClick={() => handleVoice(meme.id, false)} className="mx-1 hover:bg-red-400 border-b-4 border-red-800 hover:border-red-500 px-[10px] font-bold bg-red-700 text-white rounded shadow-lg">
              -
            </button>
            <p className="px-[10px] bg-gray-800 pt-1 text-white font-bold rounded"> {ratings[meme.id] || 0}</p>
            <div className=" border-b-4 border-orange-800 px-2 ml-1 font-bold bg-orange-700 text-black rounded shadow-lg">
              <button onClick={() => handleComments(meme.id)}>
                <BiCommentAdd className="mt-2" />
              </button>
            </div>
          </div>
          {showComments === meme.id && <Comments />}
        </div>
      ))}
      {showArrow && (
        <div className="fixed right-6 bottom-4 z-10">
          <button onClick={handleClick} className=" py-2 hover:bg-gray-400 border-b-4 border-gray-400 hover:border-gray-500 px-[10px] font-bold bg-gray-200 rounded shadow-lg">
            <TfiArrowUp className="text-black" />
          </button>
        </div>
      )}
      <ToastContainer position="bottom-left" hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </InfiniteScroll>
  );
}

export default withLanguage(BrowsingMemes);
