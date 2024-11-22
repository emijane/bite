import Header from './components/Header';
import SearchFields from './components/SearchFields';

function App() {
    return (
        <div className="wrapper">
          <Header />
          <div className="body m-10 flex flex-col justify-center">
            <SearchFields />
            <h3 id="country" className="my-5 text-center">Country:</h3>
            <h3 id="translatedRecipe" className="my-5 text-center">Translated recipe:</h3>
          </div>
        </div>
    );
}

export default App;
