import { useEffect } from 'react';

const usePersistData = (key, formData, dependencies) => {
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(formData));
  }, [...dependencies, key, formData]);
};

export default usePersistData;
