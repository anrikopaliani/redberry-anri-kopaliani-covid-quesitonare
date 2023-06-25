import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FormContext } from '@/store';

const useNavigateThanksReset = () => {
  const { setNavigateThanksPage } = useContext(FormContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/politics') {
      setNavigateThanksPage(false);
    }
  }, [setNavigateThanksPage, location.pathname]);
  return { location };
};

export default useNavigateThanksReset;
