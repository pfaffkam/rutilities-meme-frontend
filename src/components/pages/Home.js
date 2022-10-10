function Home() {
  return (
    <>
      <main className="bg-gray-600 flex justify-center h-[90vh]">
        <h5 class="text-slate-700 dark:text-white mt-5 text-base font-medium tracking-tight">
          Główna strona
          <p class="text-gray-600 mb-3"> Opis.</p>
          <div className=" flex justify-end right">miejsce na opcje</div>
          <div className="h-[500px] w-[32rem] font-bold text-gray-700 rounded-lg bg-white flex items-center justify-center font-mono">
            Miejsce na obraz mem
          </div>
        </h5>
      </main>
    </>
  );
}

export default Home;
