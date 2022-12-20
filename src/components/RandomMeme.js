function RandomMeme(randomMeme) {
  return <img className="rounded-t-lg  max-h-[80vh] h-[50vh]  w-min-[40vh] max-w-[60vh] m-16  md:rounded  border-4" src={randomMeme.randomMeme?.url} alt="random mem" />;
}

export default RandomMeme;
