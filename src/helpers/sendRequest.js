import axios from 'axios';
import { formatData } from '@/helpers';

const sendRequest = async (data) => {
  const newData = formatData(data);
  const response = await axios.post(import.meta.env.VITE_API_URL, newData);

  return response;
};

export default sendRequest;
