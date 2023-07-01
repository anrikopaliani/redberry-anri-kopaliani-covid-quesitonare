import * as yup from 'yup';

export const UserCredentialsFormValidation = yup.object({
  first_name: yup
    .string()
    .trim()
    .required('სახელის მითითება აუცილებელია')
    .min(3, 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან'),
  last_name: yup
    .string()
    .trim()
    .required('გვარის მითითება აუცილებელია')
    .min(3, 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან'),
  email: yup
    .string()
    .trim()
    .required('მეილის მითითება აუცილებელია')
    .email('უნდა იყოს მეილის ფორმატი')
    .matches(/@redberry.ge$/gm, 'უნდა იყოს რედბერის მეილი'),
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
  covid_sickness_date: yup.string().when(['had_antibody_test', 'had_covid'], {
    is: (had_antibody_test, had_covid) =>
      had_antibody_test === 'false' && had_covid === 'yes',
    then: (schema) =>
      schema
        .matches(
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          'მიუთითეთ თარიღი სწორ ფორმატში (დღე/თვე/წელი)'
        )
        .required('სავალდებულოა'),
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
