import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStoredValues, usePersistData } from '@/hooks';
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

  const getStoredValues = useStoredValues('covidForm', {
    had_covid: '',
    had_antibody_test: '',
    covid_sickness_date: '',
    test_date: '',
    number: '',
  });

  const form = useForm({
    resolver,
    defaultValues: getStoredValues,
    mode: 'all',
  });

  const {
    resetField,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const had_covid = useWatch({ control, name: 'had_covid' });
  const had_antibody_test =
    useWatch({ control, name: 'had_antibody_test' }) || null;

  const covid_sickness_date = useWatch({
    control,
    name: 'covid_sickness_date',
  });
  const test_date = useWatch({ control, name: 'test_date' });
  const number = useWatch({ control, name: 'number' });

  useEffect(() => {
    if (had_covid === 'no' || had_covid === 'now') {
      resetField('had_antibody_test');
      resetField('covid_sickness_date');
      resetField('test_date');
      resetField('number');
    }
  }, [had_covid, resetField]);

  const onSubmit = () => {
    navigate('/vaccinated');
  };

  usePersistData(
    'covidForm',
    { had_covid, had_antibody_test, covid_sickness_date, test_date, number },
    [had_covid, had_antibody_test, covid_sickness_date, test_date, number]
  );

  return {
    form,
    handleSubmit,
    errors,
    resetField,
    had_covid,
    had_antibody_test,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    onSubmit,
  };
};

export default useCovidForm;
