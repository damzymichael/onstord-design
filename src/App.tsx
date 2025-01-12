import ScrollRestoration from './components/ScrollRestoration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <main>
        <ScrollRestoration>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ScrollRestoration>
      </main>
    </BrowserRouter>
  );
}

export default App;
