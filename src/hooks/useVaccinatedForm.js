import { useForm, useWatch } from 'react-hook-form';
import { useYupValidationResolver } from '@/hooks';
import { VaccinatedFormValidation } from '@/schemas';
import { useEffect } from 'react';

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
    value: 'first_dosage_and_not_registered_on_the_second',
  },
];

const RADIO_OPTIONS_3 = [
  {
    label: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
    value: 'registered_and_waiting_for_date',
  },
  { label: 'არ ვგეგმავ', value: 'not_planned' },
  {
    label: 'გადატანილი მაქვს და ვგეგმავ აცრას',
    value: 'had_covid_and_planning_to_vaccinate',
  },
];

const useVaccinatedForm = () => {
  const resolver = useYupValidationResolver(VaccinatedFormValidation);
  const form = useForm({
    resolver,
    defaultValues: {
      had_vaccine: '',
      vaccination_stage: '',
    },
  });

  const {
    resetField,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const userHadVaccine = useWatch({ control, name: 'had_vaccine' });
  const userVaccinationStage = useWatch({
    control,
    name: 'vaccination_stage',
  });

  useEffect(() => {
    if (userHadVaccine) {
      resetField('vaccination_stage');
    }
  }, [userHadVaccine, resetField]);

  const onSubmit = (data) => console.log(data);

  return {
    form,
    handleSubmit,
    errors,
    onSubmit,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    RADIO_OPTIONS_3,
    userHadVaccine,
    userVaccinationStage,
  };
};

export default useVaccinatedForm;
