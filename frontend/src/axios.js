import axios from "axios";


const inctance = axios.create({
  baseURL: `localhost:3005`
});

export default inctance;