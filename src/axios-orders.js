import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-myburger-da364-default-rtdb.firebaseio.com/",
});

export default instance;
