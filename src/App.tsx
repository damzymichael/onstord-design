import ScrollRestoration from './components/ScrollRestoration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <main>
        <ScrollRestoration>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Routes>
        </ScrollRestoration>
      </main>
    </BrowserRouter>
  );
}

export default App;
