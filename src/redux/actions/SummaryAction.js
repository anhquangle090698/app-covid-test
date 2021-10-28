import CovidApi from "api/covidApi";
import { GET_SUMMARY_ACTION, SORT_DEFAULT, SORT_HIGHEST_NUMBER_DEATHS, SORT_MOST_TOTAL_CONFIRMED_CASE } from "redux/constants/SummaryConst";

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


export const sortTotalConfirmed = () => {
  return {
    type : SORT_MOST_TOTAL_CONFIRMED_CASE,
  }
}

export const sortHighestNumberDeaths = () => {
  return {
    type : SORT_HIGHEST_NUMBER_DEATHS,
  }
}

export const sortDefault = () => {
  return {
    type : SORT_DEFAULT,
  }
}