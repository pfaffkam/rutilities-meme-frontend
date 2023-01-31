import React, { useState, useEffect } from 'react';
import { withLanguage } from '../../components/HOC/withLanguage';
import { useAuth } from '../../hooks/useAuth';
import { FcReddit } from 'react-icons/fc';
import moment from 'moment';

const Comments = ({ texts }) => {
  const currentTime = moment(moment.now()).fromNow();
  const { auth } = useAuth();
  const [comments, setComments] = useState([]);
  const [timestamp, setTimestamp] = useState(currentTime);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [authMessage, setAuthMessage] = useState(false);

  const handleComment = (e) => {
    e.preventDefault();
    // fetch('/api/comments', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ comment })
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setComments([...comments, res.comment]);
    //   });
    if (!auth.userNick) {
      setAuthMessage(true);
      return;
    }
    if (comment.length === 0) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    setTimestamp(currentTime);
    setComments([...comments, { comment, timestamp }]);
    setComment('');
  };

  //
  const CommentList = ({ comments }) => (
    <>
      {comments.length && (
        <p className="text-white">
          {comments.length} {texts.comments}
        </p>
      )}
      <ul className="mt-4 mb-6 max-h-[20vh] scrollbar-thin scrollbar-thumb-orange-700 scrollbar-track-gray-400 overflow-y-scroll overflow-x-hidden">
        {comments.map((comment, index) => (
          <div key={index} className="border-t-2 border-gray-700 flex pt-2 my-2 mx-2 md:mx-8 w-[90%]">
            <FcReddit size={32} className=" rounded-full" />
            <div className="px-1 md:px-4 w-full">
              <div className="flex">
                <p className="text-white md:font-bold text-xs md:text-base">{auth.userNick}</p> <p className="text-gray-500 text-[8px] md:text-xs ml-4 whitespace-nowrap overflow-hidden">{comment.timestamp}</p>
              </div>
              <li className="text-xs md:text-base w-full text-white p-2 rounded-lg break-words">{comment.comment}</li>
            </div>
          </div>
        ))}
      </ul>
    </>
  );

  return (
    <div className="flex flex-col">
      <form onSubmit={handleComment}>
        <textarea className="w-full h-10 md:h-20 max-h-24 md:max-h-40 bg-gray-500 text-white rounded-lg" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button className="hover:bg-orange-400 border-b-4 px-2 border-orange-800 hover:border-orange-500 md:px-2 md:font-bold bg-orange-600 text-black rounded shadow-lg" type="submit">
          {texts.addComment}
        </button>
      </form>
      {errorMessage && !authMessage && <p className="text-red-500">{texts.errorMessageComment}</p>}
      {authMessage && <p className="text-red-500">{texts.userMessageComment}</p>}
      <CommentList comments={comments} />
    </div>
  );
};

export default withLanguage(Comments);
