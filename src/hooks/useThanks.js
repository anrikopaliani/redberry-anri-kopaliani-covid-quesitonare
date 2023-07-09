import { useEffect } from 'react';

const useThanks = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
};

export default useThanks;
