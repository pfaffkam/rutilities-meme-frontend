import photoError from '../../../assets/error.png';
import { toast } from 'react-toastify';

function RandomMeme(randomMeme) {
  try {
    if (randomMeme.randomMeme?.url.endsWith('.mp4') || randomMeme.randomMeme?.url.endsWith('.avi')) {
      return <video className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme.randomMeme?.url} alt="random meme video" controls></video>;
    } else {
      return <img className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme.randomMeme?.url} alt="random meme" />;
    }
  } catch (error) {
    if (randomMeme.randomMeme.status === 500) {
      toast.warn('Oops we have a problem with server you have to wait few minutes', { autoClose: 5000 });
      return <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />;
    } else {
      toast.warn('Oops we have a problem, no meme available, please contact support', { autoClose: 5000 });
      return <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />;
    }
  }
}

export default RandomMeme;
