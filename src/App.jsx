import React, { useEffect, useState } from "react";
import "assets/scss/main.scss";
import CovidApi from "api/covidApi";
import moment from "moment";
import TotalCaseWorld from "components/TotalCaseWorld";
import TotalCountry from "components/TotalCountry";
import { useDispatch, useSelector } from "react-redux";
import { getSummaryApi } from "redux/actions/SummaryAction";

function App(props) {
  const summary = useSelector((state) => state.SummaryReducer.summary);

  const dispatch = useDispatch();

  useEffect(async () => {

    const fetchDataSummary = async () => {
      dispatch(await getSummaryApi());
    };

    fetchDataSummary();
  }, []);

  // moment(dataSummary.Date).format("DD/MM/YYYY, h:mm:ss")

  return (
    <div className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Thống kê số liệu Covid-19 trên toàn thế giới
        </h1>
        <TotalCaseWorld global={summary.Global}></TotalCaseWorld>
        <TotalCountry summary={summary}></TotalCountry>
        <p className="home__slogan">Chung ta phòng chống dịch bệnh Covid-19</p>
      </div>
    </div>
  );
}

export default App;
