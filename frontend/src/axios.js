import axios from "axios";


const inctance = axios.create({
  baseURL: `https://195.201.7.129:3005`
});

export default inctance;