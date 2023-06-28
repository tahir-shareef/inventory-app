import axios from 'axios';
import { api } from '../interfaces/api.interface';

export const getOrders = () => {
  return axios[api.getOrders.method](api.getOrders.url);
};
