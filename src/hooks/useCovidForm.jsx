import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CovidFormValidation } from '@/schemas';
import { useEffect } from 'react';

const useCovidForm = () => {
  const resolver = yupResolver(CovidFormValidation);

  const form = useForm({
    resolver,
    defaultValues: {
      had_covid: '',
      had_antibody_test: '',
      had_covid_date: '',
      test_date: '',
      number: '',
    },
  });

  const {
    resetField,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const userHadCovid = useWatch({ control, name: 'had_covid' });
  const userHadAntibodyTest =
    useWatch({ control, name: 'had_antibody_test' }) || null;

  useEffect(() => {
    if (userHadCovid === 'no' || userHadCovid === 'now') {
      resetField('had_antibody_test');
    }
  }, [userHadCovid, resetField]);

  return {
    form,
    handleSubmit,
    errors,
    resetField,
    userHadCovid,
    userHadAntibodyTest,
  };
};

export default useCovidForm;
