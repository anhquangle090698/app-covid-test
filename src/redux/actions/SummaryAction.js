import CovidApi from "api/covidApi";
import {
  GET_CASE_COUNTRY,
  GET_CASE_COUNTRY_BY_DATE,
  GET_INFORMATION_COUNTRY,
  GET_SUMMARY_ACTION,
  REMOVE_DATA_CASE_COUNTRY_BY_DATE_AND_INFORMATION_COUNTRY,
  SORT_DEFAULT,
  SORT_HIGHEST_NUMBER_DEATHS,
  SORT_MOST_TOTAL_CONFIRMED_CASE,
} from "redux/constants/SummaryConst";

//Action dispatch data lên reducer
export const getSummaryAction = (dataSummary) => {
  return {
    type: GET_SUMMARY_ACTION,
    payload: dataSummary,
  };
};

//Action gọi api lấy tổng số kệu thông kê covid-19 trên toàn thế giới
export const getSummaryApi = async () => {
  return async (dispatch) => {
    try {
      const response = await CovidApi.getSummary();
      dispatch(getSummaryAction(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInformationCountryAction = (dataCountry) => {
  return {
    type: GET_INFORMATION_COUNTRY,
    payload: dataCountry,
  };
};

//Action goi api lấy thông tin của quốc gia
export const getInformationCountryApi = async (countryCode) => {
  return async (dispatch) => {
    try {
      const response = await CovidApi.getInformationCountry(countryCode);

        dispatch(getInformationCountryAction(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCaseCountryAction = (dataCaseCountry) => {
  return {
    type: GET_CASE_COUNTRY,
    payload: dataCaseCountry,
  };
};
//Action goi api lấy số liệu thống kê theo từng ngày của quốc gia
export const getCaseCountryApi = async (slug) => {
  return async (dispatch) => {
    try {
      const response = await CovidApi.getCaseCountry(slug);
      dispatch(getCaseCountryAction(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCaseCountryByDateAction = (dataCaseCountryDate) => {
  return {
    type: GET_CASE_COUNTRY_BY_DATE,
    payload: dataCaseCountryDate,
  };
};

//Action goi api lấy số liệu thống kê theo từng ngày của quốc gia
export const getCaseCountryByDateApi = async (slug, dateFrom, dateTo) => {
  return async (dispatch) => {
    try {
      const response = await CovidApi.getCaseCountryByDate(
        slug,
        dateFrom,
        dateTo
      );
      dispatch(getCaseCountryByDateAction(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortTotalConfirmed = () => {
  return {
    type: SORT_MOST_TOTAL_CONFIRMED_CASE,
  };
};

export const sortHighestNumberDeaths = () => {
  return {
    type: SORT_HIGHEST_NUMBER_DEATHS,
  };
};

export const sortDefault = () => {
  return {
    type: SORT_DEFAULT,
  };
};

export const removeDataCaseCountryByDateAndInformationCountry = () => {
  return {
    type: REMOVE_DATA_CASE_COUNTRY_BY_DATE_AND_INFORMATION_COUNTRY,
  };
};

