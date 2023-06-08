import { Routes, Route } from 'react-router-dom';
import { Credentials, StartPage } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/credentials' element={<Credentials />} />
      </Routes>
    </>
  );
}

export default App;
