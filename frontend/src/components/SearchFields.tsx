const SearchFields = () => {
    return (
        <div className="search flex flex-row gap-3 justify-center">
            <input
                name="recipe"
                placeholder="Search for a recipe"
                className="outline-black border-2 border-black px-2 py-1"
            />
            <button id="translateBtn" className="bg-pink-300 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
    );
};

export default SearchFields;
