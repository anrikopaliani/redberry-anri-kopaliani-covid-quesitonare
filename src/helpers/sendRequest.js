import axios from 'axios';
import { formatData } from '@/helpers';

const URL = 'https://covid19.devtest.ge/api/create';

const sendRequest = (data) => {
  const newData = formatData(data);
  console.log(newData);
  axios.post(URL, newData).then((response) => console.log(response));
};

export default sendRequest;
