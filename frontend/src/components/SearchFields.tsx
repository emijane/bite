const SearchFields = () => {
    return (
        <div className="search flex flex-row gap-3 justify-center">
            <input
                name="recipe"
                placeholder="Search for a recipe"
                className="outline-black border-2 border-black px-2 py-1"
            />
            <select name="countryLanguage" className="outline-black border-2 border-black px-2 py-1">
                <option value="" disabled selected>Select a country </option>
                <option value="en">United States (English)</option>
                <option value="md">China (Mandarin)</option>
                <option value="es">Spain (Spanish)</option>
                <option value="hi">India (Hindi)</option>
                <option value="fr">France (French)</option>
                <option value="ru">Russia (Russian)</option>
                <option value="ge">Germany (German)</option>
                <option value="ja">Japan (Japanese)</option>
                <option value="po">Brazil (Portuguese)</option>
                <option value="ar">Egypt (Arabic)</option>
            </select>
            <button id="translateBtn" className="bg-pink-300 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
    );
};

export default SearchFields;
