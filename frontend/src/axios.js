import axios from "axios";

const inctance = axios.create({
  baseURL: `${window.location.hostname}:3005`
});

export default inctance;