import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import MainWorkspace from './pages/MainWorkspace/MainWorkspace';
import Investigate from './pages/Investigate/Investigate';
import WellDetails from './pages/WellDetails/WellDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/workspace" element={<MainWorkspace />} />
        <Route path="/investigate" element={<Investigate />} />
        <Route path="/wells" element={<WellDetails />} />
        <Route path="/wells/:wellId" element={<WellDetails />} />
        <Route path="/well-details" element={<WellDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
