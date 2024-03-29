import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useSelector } from "react-redux";
import Loading from "components/Loading";

TotalCaseWorld.propTypes = {
  global: PropTypes.object,
  summary: PropTypes.object,
};

function TotalCaseWorld() {
  const summary = useSelector((state) => state.SummaryReducer.summary);

  const global = summary.Global;

  return (
    <div className="total-case">
      <h3 className="total-case__title">
        Số liệu thống kê hôm nay ({moment(global?.Date).format("DD/MM/YYYY")})
      </h3>

      {global ? (
        <div className="total-case__content">
          <div className="total-case__card total-case__card--infected">
            <p className="total-case__card-subject">Số ca nhiễm</p>
            <p className="total-case__card-number total-case__card-number--infected">
              {global?.NewConfirmed.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số ca nhiễm trên thế giới
            </p>
          </div>
          <div className="total-case__card total-case__card--recovered">
            <p className="total-case__card-subject">Số ca hồi phục</p>
            <p className="total-case__card-number total-case__card-number--recovered">
              {global?.NewRecovered.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số hồi phục trên thế giới
            </p>
          </div>
          <div className="total-case__card total-case__card--deaths">
            <p className="total-case__card-subject">Số ca tử vong</p>
            <p className="total-case__card-number total-case__card-number--deaths">
              {global?.NewDeaths.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số tử vong trên thế giới
            </p>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}

      <h3 className="total-case__title">Số liệu thống kê tất cả các ngày</h3>
      {global ? (
        <div className="total-case__content">
          <div className="total-case__card total-case__card--infected">
            <p className="total-case__card-subject">Số ca nhiễm</p>
            <p className="total-case__card-number total-case__card-number--infected">
              {global?.TotalConfirmed.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số ca nhiễm trên thế giới
            </p>
          </div>
          <div className="total-case__card total-case__card--recovered">
            <p className="total-case__card-subject">Số ca hồi phục</p>
            <p className="total-case__card-number total-case__card-number--recovered">
              {global?.TotalRecovered.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số hồi phục trên thế giới
            </p>
          </div>
          <div className="total-case__card total-case__card--deaths">
            <p className="total-case__card-subject">Số ca tử vong</p>
            <p className="total-case__card-number total-case__card-number--deaths">
              {global?.TotalDeaths.toLocaleString(2)}
            </p>
            <p className="total-case__card-description">
              Tổng số tử vong trên thế giới
            </p>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

export default TotalCaseWorld;
