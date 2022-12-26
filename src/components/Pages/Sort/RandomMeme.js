import photoError from '../../../assets/error.png';
import { toast } from 'react-toastify';

function RandomMeme(randomMeme) {
  try {
    if (randomMeme.randomMeme?.url.endsWith('.jpeg') || randomMeme.randomMeme?.url.endsWith('.jpg') || randomMeme.randomMeme?.url.endsWith('.png')) {
      return <img className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme.randomMeme?.url} alt="random meme" />;
    } else if (randomMeme.randomMeme?.url.endsWith('.mp4')) {
      return <video className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme.randomMeme?.url} alt="random meme video" controls></video>;
    }
  } catch (error) {
    toast.warn('Oops we have a problem, no meme available, please contact support', { autoClose: 5000 });

    return <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />;
  }
}

export default RandomMeme;
