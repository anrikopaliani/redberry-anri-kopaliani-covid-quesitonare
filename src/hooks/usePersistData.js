import { useEffect } from 'react';
import { useStoredValues } from '@/hooks';

const usePersistData = (formData, dependencies) => {
  const storedValues = useStoredValues({});

  useEffect(() => {
    window.localStorage.setItem(
      'formData',
      JSON.stringify({ ...storedValues, ...formData })
    );
  }, [...dependencies, formData, storedValues]);
};

export default usePersistData;
