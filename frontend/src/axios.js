import axios from "axios";


const inctance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:3005`
});

export default inctance;