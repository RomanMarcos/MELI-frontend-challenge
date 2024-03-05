import './App.scss';

import { BrowserRouter } from "react-router-dom";
import { Search } from './views/search/Search';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </main>
  );
}

export default App;
