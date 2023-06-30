import axios from 'axios';
import { formatData } from '@/helpers';

const URL = 'https://covid19.devtest.ge/api/create';

const sendRequest = async (data) => {
  const newData = formatData(data);

  const response = await axios.post(URL, newData);

  return response;
};

export default sendRequest;
