import { Routes, Route } from 'react-router-dom';
import { Credentials, StartPage, CovidPage } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/covid' element={<CovidPage />} />
      </Routes>
    </>
  );
}

export default App;
