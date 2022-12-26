import useFetch from '../../../hooks/useFetch';

const Type = ({ handleChange, reference }) => {
  const types = useFetch('https://api.reykez.pl/api/memes/meme-types').data?._embedded?.items;

  return (
    <select name="type" ref={reference} className="flex mt-3 mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onChange={handleChange} defaultValue="Type">
      <option value="Type" disabled>
        Type
      </option>
      {types?.map((type, i) => {
        return (
          <option key={i} value={type.id}>
            {type.id}
          </option>
        );
      })}
    </select>
  );
};

export default Type;
