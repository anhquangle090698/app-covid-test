import TotalCaseWorld from "components/TotalCaseWorld";
import TotalCountry from "container/TotalCountry";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSummaryApi } from "redux/actions/SummaryAction";

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataSummary = async () => {
      dispatch(await getSummaryApi());
    };

    fetchDataSummary();
  });

  return (
    <div className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Thống kê số liệu Covid-19 trên toàn thế giới
        </h1>
        <TotalCaseWorld></TotalCaseWorld>
        <TotalCountry></TotalCountry>
        <div className="home__footer">
          <p className="home__slogan">
            Chung tay phòng chống dịch bệnh Covid-19 <br></br> Thực hiện 5k:
            Khẩu trang - Khử khuẩn - Khoảng cách - Không tập trung - Khai báo y
            tế
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
