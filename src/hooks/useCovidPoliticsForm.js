import { useForm, useWatch } from 'react-hook-form';
import {
  useYupValidationResolver,
  useStoredValues,
  usePersistData,
} from '@/hooks';

import { CovidPoliticsFormValidation } from '@/schemas';

const RADIO_OPTIONS = [
  { label: 'კვირაში ორჯერ', value: 'twice_a_week' },
  { label: 'კვირაში ერთხელ', value: 'once_a_week' },
  { label: 'ორ კვირაში ერთხელ', value: 'once_every_two_weeks' },
  { label: 'თვეში ერთხელ', value: 'once_a_month' },
];

const RADIO_OPTIONS_2 = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

const useCovidPoliticsForm = () => {
  const resolver = useYupValidationResolver(CovidPoliticsFormValidation);

  const getStoredValues = useStoredValues('politicsForm', {
    non_formal_meetings: '',
    number_of_days_from_office: '',
    what_about_meetings_in_live: '',
    tell_us_your_opinion_about_us: '',
  });

  const form = useForm({
    resolver,
    defaultValues: getStoredValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = (data) => console.log(data);

  const non_formal_meetings = useWatch({
    control,
    name: 'non_formal_meetings',
  });
  const number_of_days_from_office = useWatch({
    control,
    name: 'number_of_days_from_office',
  });
  const what_about_meetings_in_live = useWatch({
    control,
    name: 'what_about_meetings_in_live',
  });
  const tell_us_your_opinion_about_us = useWatch({
    control,
    name: 'tell_us_your_opinion_about_us',
  });

  usePersistData(
    'politicsForm',
    {
      non_formal_meetings,
      number_of_days_from_office,
      what_about_meetings_in_live,
      tell_us_your_opinion_about_us,
    },
    [
      non_formal_meetings,
      number_of_days_from_office,
      what_about_meetings_in_live,
      tell_us_your_opinion_about_us,
    ]
  );

  return {
    form,
    handleSubmit,
    errors,
    onSubmit,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
  };
};

export default useCovidPoliticsForm;
