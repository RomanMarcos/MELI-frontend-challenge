import './App.scss';

import { BrowserRouter } from "react-router-dom";
import { Search } from './views/search/Search';
import { Router } from './Router';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Search />
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default App;
