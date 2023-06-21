import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Credentials,
  StartPage,
  CovidPage,
  CovidPoliticsPage,
  VaccinatedPage,
} from '@/pages';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/covid' element={<CovidPage />} />
        <Route path='/politics' element={<CovidPoliticsPage />} />
        <Route path='/vaccinated' element={<VaccinatedPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
