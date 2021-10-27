import axiosClient from "./axiosClient";

const CovidApi = {
  getSummary: () => {
    const url = "summary";
    return axiosClient.get(url);
  },
};

export default CovidApi;
