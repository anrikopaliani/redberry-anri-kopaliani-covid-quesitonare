import { Routes, Route } from 'react-router-dom';
import {
  Credentials,
  StartPage,
  CovidPage,
  CovidPoliticsPage,
  VaccinatedPage,
  Thanks,
} from '@/pages';
import { AnimatePresence } from 'framer-motion';

import { useNavigateThanksReset } from '@/hooks';

function App() {
  const { location } = useNavigateThanksReset();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/covid' element={<CovidPage />} />
        <Route path='/politics' element={<CovidPoliticsPage />} />
        <Route path='/vaccinated' element={<VaccinatedPage />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
