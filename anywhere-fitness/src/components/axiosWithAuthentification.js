import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://anywhere-fitness-ptbw.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
