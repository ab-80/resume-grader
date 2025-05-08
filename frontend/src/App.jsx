import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App