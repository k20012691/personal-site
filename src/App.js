import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import SynapseVR from './pages/Projects/SynapseVR';
import F1DataViz from './pages/Projects/F1DataViz';
import AacDashboard from './pages/Projects/AacDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<PortfolioPage />} />
        <Route path='/project/synapsevr' element={<SynapseVR />} />
        <Route path='/project/f1-dataviz' element={<F1DataViz />} />
        <Route path='/project/aac-dashboard' element={<AacDashboard />} />
      </Routes>
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
