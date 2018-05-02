import axios from 'axios';
import { API_ROOT } from '../configs/api';

export const getSuggestions = numbers => axios.get(`${API_ROOT}/suggestions?numbers=${numbers}`);
