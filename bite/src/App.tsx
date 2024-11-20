function App() {
  return (
    <div className="wrapper">
      <div className="bg-pink-200 text-black text-center p-10">
        <h1 className="text-4xl font-bold">bite</h1>
      </div>
        <div className="body m-10 flex flex-col justify-center">
          <div className="search flex flex-row gap-3 justify-center">
            <input
              name="recipe"
              placeholder="search for a recipe"
              className="outline-black border-2 border-black px-2 py-1"
            />
            <button className="bg-pink-300 text-white font-bold py-2 px-4 rounded">Search</button>
          </div>
          <h3 className="my-5 text-center">Recipes:</h3>
        </div>
    </div>
  );
}

export default App;
