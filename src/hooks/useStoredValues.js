const userStoredValues = (key, defaultValues) => {
  let data = localStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);

    return data;
  }
  return defaultValues;
};

export default userStoredValues;
