import photoError from '../../assets/error.png';
import { toast } from 'react-toastify';

export function RandomMeme({ randomMeme, texts }) {
  try {
    if (randomMeme?.url.endsWith('.mp4') || randomMeme?.url.endsWith('.avi')) {
      return <video className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme?.url} alt="random meme video" controls></video>;
    } else {
      return <img className="rounded-t-lg max-w-[70vw] min-h-0 max-h-[70vh] min-w-0 mb-12 md:rounded border-4" src={randomMeme?.url} alt="random meme" />;
    }
  } catch (error) {
    toast.warn(`${texts.notificationToastWarn}`, { autoClose: 5000 });

    return <img className="rounded-t-lg max-w-full min-h-0 max-h-full m-8 md:rounded border-4" src={photoError} alt="error" />;
  }
}
