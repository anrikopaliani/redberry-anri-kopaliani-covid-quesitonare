import { Routes, Route } from 'react-router-dom';
import { Credentials, StartPage, CovidPage, VaccinatedPage } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/covid' element={<CovidPage />} />
        <Route path='/vaccinated' element={<VaccinatedPage />} />
      </Routes>
    </>
  );
}

export default App;
