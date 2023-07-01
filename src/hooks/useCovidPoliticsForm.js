import { useForm, useWatch } from 'react-hook-form';
import {
  useYupValidationResolver,
  useStoredValues,
  usePersistData,
} from '@/hooks';
import { useContext } from 'react';
import { FormContext } from '@/store';
import { CovidPoliticsFormValidation } from '@/schemas';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from '@/helpers';

const RADIO_OPTIONS = [
  { label: 'კვირაში ორჯერ', value: 'twice_a_week' },
  { label: 'კვირაში ერთხელ', value: 'once_a_week' },
  { label: 'ორ კვირაში ერთხელ', value: 'once_in_a_two_weeks' },
  { label: 'თვეში ერთხელ', value: 'once_in_a_month' },
];

const RADIO_OPTIONS_2 = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

const useCovidPoliticsForm = () => {
  const { setNavigateThanksPage, formData } = useContext(FormContext);
  const resolver = useYupValidationResolver(CovidPoliticsFormValidation);

  const getStoredValues = useStoredValues({
    non_formal_meetings: '',
    number_of_days_from_office: '',
    what_about_meetings_in_live: '',
    tell_us_your_opinion_about_us: '',
  });
  const navigate = useNavigate();

  const form = useForm({
    resolver,
    defaultValues: getStoredValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (data) => {
    setNavigateThanksPage(true);
    const response = await sendRequest({ ...formData, ...data });

    if (response.status === 201) {
      navigate('/thanks');
      window.localStorage.removeItem('formData');
    }
  };

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
