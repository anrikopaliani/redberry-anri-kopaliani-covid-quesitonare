import { useEffect, useContext } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  useYupValidationResolver,
  useStoredValues,
  usePersistData,
} from '@/hooks';
import { FormContext } from '@/store';
import { VaccinatedFormValidation } from '@/schemas';
import { useNavigate } from 'react-router-dom';

const RADIO_OPTIONS = [
  { label: 'კი', value: 'true' },
  { label: 'არა', value: 'false' },
];

const RADIO_OPTIONS_2 = [
  {
    label: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
    value: 'first_dosage_and_registered_on_the_second',
  },
  {
    label: 'სრულად აცრილი ვარ',
    value: 'fully_vaccinated',
  },
  {
    label: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
    value: 'first_dosage_and_not_registered_yet',
  },
];

const RADIO_OPTIONS_3 = [
  {
    label: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
    value: 'registered_and_waiting',
  },
  { label: 'არ ვგეგმავ', value: 'not_planned' },
  {
    label: 'გადატანილი მაქვს და ვგეგმავ აცრას',
    value: 'had_covid_and_planning_to_be_vaccinated',
  },
];

const useVaccinatedForm = () => {
  const resolver = useYupValidationResolver(VaccinatedFormValidation);

  const getStoredValues = useStoredValues({
    had_vaccine: '',
    vaccination_stage: '',
    i_am_waiting: '',
  });

  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const form = useForm({
    resolver,
    defaultValues: getStoredValues,
  });

  const {
    resetField,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const had_vaccine = useWatch({ control, name: 'had_vaccine' });
  const vaccination_stage = useWatch({
    control,
    name: 'vaccination_stage',
  });
  const i_am_waiting = useWatch({ control, name: 'i_am_waiting' });

  useEffect(() => {
    if (had_vaccine) {
      resetField('vaccination_stage');
      resetField('i_am_waiting');
    }
  }, [had_vaccine, resetField]);

  const onSubmit = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
    navigate('/politics');
  };

  usePersistData({ had_vaccine, vaccination_stage, i_am_waiting }, [
    had_vaccine,
    vaccination_stage,
  ]);

  return {
    form,
    handleSubmit,
    errors,
    onSubmit,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    RADIO_OPTIONS_3,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  };
};

export default useVaccinatedForm;
