import * as yup from 'yup';

export const UserCredentialsFormValidation = yup.object({
  first_name: yup
    .string()
    .trim()
    .min(3, 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან')
    .required('სახელის მითითება აუცილებელია'),
  last_name: yup
    .string()
    .trim()
    .min(3, 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან')
    .required('გვარის მითითება აუცილებელია'),
  email: yup
    .string()
    .trim()
    .matches(
      /@redberry.ge$/gm,
      'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
    )
    .email('თქვენ მიერ შეყვანილი მეილი არასწორია')
    .required('მეილის მითითება აუცილებელია'),
});

export const CovidFormValidation = yup.object({
  had_covid: yup.string().required('სავალდებულოა'),
  had_antibody_test: yup.string().when('had_covid', {
    is: 'yes',
    then: (schema) => schema.required('სავალდებულოა'),
    otherwise: (schema) => schema.notRequired(),
  }),
  test_date: yup
    .date()
    .typeError('მიუთითე რიცხვი')
    .when(['had_antibody_test', 'had_covid'], {
      is: (had_antibody_test, had_covid) =>
        had_antibody_test === 'true' && had_covid === 'yes',
      then: (schema) => schema.required('სავალდებულოა'),
      otherwise: (schema) => schema.notRequired(),
    }),
  number: yup.string().when(['had_antibody_test', 'had_covid'], {
    is: (had_antibody_test, had_covid) =>
      had_antibody_test === 'true' && had_covid === 'yes',
    then: (schema) =>
      schema.matches(/^\d+$/, 'მიუთითეთ რიცხვი').required('სავალდებულოა'),
    otherwise: (schema) => schema.notRequired(),
  }),
  covid_sickness_date: yup
    .date()
    .typeError('სავალდებულოა')
    .when(['had_antibody_test', 'had_covid'], {
      is: (had_antibody_test, had_covid) =>
        had_antibody_test === 'false' && had_covid === 'yes',
      then: (schema) => schema.required('სავალდებულოა'),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export const CovidPoliticsFormValidation = yup.object({
  non_formal_meetings: yup.string().required('სავალდებულოა'),
  number_of_days_from_office: yup.string().required('სავალდებულოა'),
  what_about_meetings_in_live: yup.string().notRequired(),
  tell_us_your_opinion_about_us: yup.string().notRequired(),
});

export const VaccinatedFormValidation = yup.object({
  had_vaccine: yup.string().required('სავალდებულოა'),
  vaccination_stage: yup.string().when('had_vaccine', {
    is: 'true',
    then: (schema) => schema.required('სავალდებულოა'),
  }),
  i_am_waiting: yup.string().when('had_vaccine', {
    is: 'false',
    then: (schema) => schema.required('სავალდებულოა'),
  }),
});
