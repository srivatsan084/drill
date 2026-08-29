import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import MainWorkspace from './pages/MainWorkspace/MainWorkspace';
import Investigate from './pages/Investigate/Investigate';
import WellDetails from './pages/WellDetails/WellDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set root URL '/' to load the Well Overview dashboard directly */}
        <Route path="/" element={<WellDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/workspace" element={<MainWorkspace />} />
        <Route path="/investigate" element={<Investigate />} />
        <Route path="/wells" element={<WellDetails />} />
        <Route path="/wells/:wellId" element={<WellDetails />} />
        <Route path="/well-details" element={<WellDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
