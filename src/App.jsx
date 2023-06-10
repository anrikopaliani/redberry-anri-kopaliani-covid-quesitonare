import { Routes, Route } from 'react-router-dom';
import { Credentials, StartPage, CovidPage, CovidPoliticsPage } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/covid' element={<CovidPage />} />
        <Route path='/politics' element={<CovidPoliticsPage />} />
      </Routes>
    </>
  );
}

export default App;
