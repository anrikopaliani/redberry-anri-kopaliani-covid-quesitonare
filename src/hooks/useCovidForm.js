import { useContext } from 'react';
import { FormContext } from '@/store';
import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStoredValues, usePersistData } from '@/hooks';
import { CovidFormValidation } from '@/schemas';

const RADIO_OPTIONS = [
  { label: 'კი', value: 'yes' },
  { label: 'არა', value: 'no' },
  { label: 'ახლა მაქვს', value: 'have_right_now' },
];

const RADIO_OPTIONS_2 = [
  { label: 'კი', value: 'true' },
  { label: 'არა', value: 'false' },
];

const useCovidForm = () => {
  const resolver = yupResolver(CovidFormValidation);
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const getStoredValues = useStoredValues({
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

  const onSubmit = (data) => {
    setFormData((prevState) => ({ ...prevState, ...data }));
    navigate('/vaccinated');
  };

  usePersistData(
    { had_covid, had_antibody_test, covid_sickness_date, test_date, number },
    [had_covid, had_antibody_test, covid_sickness_date, test_date, number]
  );

  let curr = new Date();
  curr.setDate(curr.getDate());
  let date = curr.toISOString().substring(0, 10);

  return {
    form,
    handleSubmit,
    errors,
    resetField,
    had_covid,
    had_antibody_test,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    date,
    onSubmit,
  };
};

export default useCovidForm;
