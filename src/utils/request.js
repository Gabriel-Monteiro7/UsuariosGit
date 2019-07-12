import axios from "axios";

const urlBase = "	https://api.github.com/users";

const selectAllUsers = () => {
  return axios.get(urlBase);
};

export { selectAllUsers,};
