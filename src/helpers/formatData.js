const formatData = (data) => {
  let newData = { ...data };

  newData.had_antibody_test = JSON.parse(data.had_antibody_test);
  newData.had_vaccine = JSON.parse(data.had_vaccine);

  if (newData.had_antibody_test) {
    const { test_date, number } = newData;
    delete newData.test_date;
    delete newData.number;

    newData = {
      ...newData,
      antibodies: { test_date, number },
    };
  }

  return newData;
};

export default formatData;
