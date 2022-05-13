import Loginpg from './pages/Loginpg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mainpg from './pages/Mainpg'
import Settingspg from './pages/Settingspg';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpg />} />
      <Route path="/frg" element={<Mainpg />} />
      <Route path="/settings" element={<Settingspg />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
