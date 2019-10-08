import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const api = axios.create({
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
