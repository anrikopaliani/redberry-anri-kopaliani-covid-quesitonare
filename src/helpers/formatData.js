const formatData = (data) => {
  let newData = { ...data };

  newData.had_antibody_test = JSON.parse(data.had_antibody_test);
  newData.had_vaccine = JSON.parse(data.had_vaccine);
  newData.number_of_days_from_office = Number(
    newData.number_of_days_from_office
  );

  if (newData.had_antibody_test && newData.test_date && newData.number) {
    const { test_date, number } = newData;
    delete newData.test_date;
    delete newData.number;
    delete newData.covid_sickness_date;

    newData = {
      ...newData,
      antibodies: { test_date: new Date(test_date).toISOString(), number },
    };
  }

  if (!newData.had_antibody_test) {
    delete newData.test_date;
    delete newData.number;
    delete newData.antibodies;
  }

  if (newData.had_vaccine) {
    delete newData.i_am_waiting;
  }

  if (!newData.had_vaccine) {
    delete newData.vaccination_stage;
  }

  return newData;
};

export default formatData;
