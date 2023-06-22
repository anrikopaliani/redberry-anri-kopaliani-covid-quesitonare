import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CovidFormValidation } from '@/schemas';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RADIO_OPTIONS = [
  { label: 'კი', value: 'yes' },
  { label: 'არა', value: 'no' },
  { label: 'ახლა მაქვს', value: 'now' },
];

const RADIO_OPTIONS_2 = [
  { label: 'კი', value: 'true' },
  { label: 'არა', value: 'false' },
];

const useCovidForm = () => {
  const resolver = yupResolver(CovidFormValidation);
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    console.log(data);
    navigate('/vaccinated');
  };

  return {
    form,
    handleSubmit,
    errors,
    resetField,
    userHadCovid,
    userHadAntibodyTest,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    onSubmit,
  };
};

export default useCovidForm;
