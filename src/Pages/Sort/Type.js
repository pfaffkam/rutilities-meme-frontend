import useFetch from '../../hooks/useFetch';

export const Type = ({ handleChange, reference, texts }) => {
  const types = useFetch(`${process.env.REACT_APP_API_BASE_URL}memes/meme-types`).data?._embedded?.items;

  return (
    <select name="type" ref={reference} className="flex mt-3 mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onChange={handleChange} defaultValue="Type">
      <option value="Type" disabled>
        {texts.type}
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