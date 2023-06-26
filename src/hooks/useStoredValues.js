const userStoredValues = (defaultValues) => {
  let data = localStorage.getItem('formData');
  if (data) {
    data = JSON.parse(data);

    return data;
  }
  return defaultValues;
};

export default userStoredValues;
