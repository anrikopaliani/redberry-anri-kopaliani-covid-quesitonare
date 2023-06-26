import axios from 'axios';

const URL = 'https://covid19.devtest.ge/api/create';

const sendRequest = (data) => {
  axios.post(URL, data).then((response) => console.log(response));
};

export default sendRequest;
