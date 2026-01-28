import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Cards from './pages/Cards';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
