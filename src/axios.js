import axios from "axios";

const inctance = axios.create({
  baseURL: 'http://localhost:4444'
});

export default inctance;