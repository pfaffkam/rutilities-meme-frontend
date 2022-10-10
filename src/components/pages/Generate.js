import photo from '../../assets/przykladowe.jpg';

function Generate() {
  return (
    <>
      <main className="bg-gray-600 flex justify-center h-[90vh]">
        <a
          href="#"
          class="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-auto hover:bg-gray-600 border-gray-700 bg-gray-700 :hover:bg-gray-700"
        >
          <img
            class="object-cover rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={photo}
            alt="mem"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-amber-700 ">Generator memów</h5>
            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">
                Wpisz co ma być na górze mema
              </label>
              <input
                class="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Treść"
              />
              <label class="block text-gray-400 text-sm font-bold mb-2">
                Wpisz co ma być na dole mema
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Treść"
              />
              <button
                type="button"
                class="text-white font-bold focus:text-amber-700 focus:outline-none focus:[bg,text]font-medium rounded-lg text-sm px-5 py-2 mr-2 mt-8 bg-gray-800 hover:bg-gray-700 focus:bg-gray-900 border-gray-700"
              >
                Dodaj
              </button>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}
export default Generate;
