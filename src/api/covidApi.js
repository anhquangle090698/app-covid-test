import axiosClient from "./axiosClient";

const CovidApi = {
  getSummary: () => {
    const url = "summary";
    return axiosClient.get(url);
  },

  getInformationCountry: (countryCode) => {
    const url = "";
    return axiosClient.get(url, {
      baseURL: `https://restcountries.com/v3.1/alpha/${countryCode}`,
    });
  },

  getCaseCountryByDate: (slug, dateFrom, dateTo) => {
    const url = `country/${slug}?from=${dateFrom}&to=${dateTo}`;
    return axiosClient.get(url);
  },
};

export default CovidApi;
