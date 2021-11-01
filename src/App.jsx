import React, { useEffect } from "react";
import "assets/scss/main.scss";
import TotalCaseWorld from "components/TotalCaseWorld";
import TotalCountry from "components/TotalCountry";
import { useDispatch } from "react-redux";
import { getSummaryApi } from "redux/actions/SummaryAction";

function App(props) {
  const dispatch = useDispatch();

  useEffect(async () => {
    const fetchDataSummary = async () => {
      dispatch(await getSummaryApi());
    };

    fetchDataSummary();
  }, []);

  return (
    <div className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Thống kê số liệu Covid-19 trên toàn thế giới
        </h1>
        <TotalCaseWorld></TotalCaseWorld>
        <TotalCountry></TotalCountry>
        <p className="home__slogan">Chung tay phòng chống dịch bệnh Covid-19</p>
      </div>
    </div>
  );
}

export default App;
