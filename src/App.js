import Loginpg from './pages/Loginpg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mainpg from './pages/Mainpg'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpg />} />
      <Route path="/frg" element={<Mainpg />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
