import axios from "axios";


const inctance = axios.create({
  baseURL: `http://localhost:3005`
});

export default inctance;