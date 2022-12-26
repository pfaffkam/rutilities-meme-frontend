import useFetch from '../../../hooks/useFetch';

const Category = ({ handleChange, reference }) => {
  const categories = useFetch('https://api.reykez.pl/api/memes/meme-categories').data?._embedded?.items;

  return (
    <div className="mb-4">
      <select name="category" ref={reference} className="flex mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onChange={handleChange} defaultValue="Category">
        <option value="Category" disabled>
          Category
        </option>
        {categories?.map((category, i) => (
          <option key={i} value={category.id}>
            {category.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
