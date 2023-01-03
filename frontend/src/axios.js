import axios from "axios";


const inctance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api`
});

export default inctance;