import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getCaseCountryByDateApi,
  removeDataCaseCountryByDateAndInformationCountry,
} from "redux/actions/SummaryAction";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "components/Loading";

function PopupCountry({ informationCountry, closePopup, slug, loading }) {
  const [showChart, setShowChart] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const dispatch = useDispatch();

  const caseCountryByDate = useSelector(
    (state) => state.SummaryReducer.caseCountryByDate
  );

  const dataInfected = caseCountryByDate?.map((infected) => {
    return infected.Confirmed;
  });

  const dataRecovered = caseCountryByDate?.map((deaths) => {
    return deaths.Recovered;
  });

  const dataDeaths = caseCountryByDate?.map((deaths) => {
    return deaths.Deaths;
  });

  const categories = caseCountryByDate?.map((date) => {
    return moment(date.Date).format("DD/MM/YYYY");
  });

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Biểu đồ thống kê số liệu covid-19 theo khoảng thời gian",
    },
    subtitle: {
      text: `Của ${informationCountry[0]?.name.common}`,
    },
    xAxis: {
      title: {
        text: "Thời gian",
      },
      categories: categories,
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "Số người",
      },
    },
    series: [
      {
        name: "Số ca nhiễm",
        data: dataInfected,
      },
      {
        name: "Số ca hồi phục",
        data: dataRecovered,
      },
      {
        name: "Số ca tử vong",
        data: dataDeaths,
      },
    ],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    tooltip: {
      headerFormat:
        '<p style="font-size: 14px; color: #353b48; font-weight: 700; ">Ngày: {point.key}</p></br>',
      pointFormat:
        '<p style="font-size: 15px; color: #353b48; font-weight: 400;">{series.name}: {point.y}</p>',
    },
    colors: ["#e67e22", "#2ecc71", "#e74c3c"],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      await getCaseCountryByDateApi(
        slug,
        moment(startDate).format(),
        moment(endDate).format()
      )
    );

    setShowChart(true);
  };
  return (
    <Fragment>
      <div className="popup-country">
        <div className="popup-country__wrapper">
          <h3 className="popup-country__title">
            Thông tin và số liệu thống kê chi tiết covid-19
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="popup-country__close"
            viewBox="0 0 16 16"
            onClick={() => {
              closePopup();

              setShowChart(false);
              dispatch(removeDataCaseCountryByDateAndInformationCountry());
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          {informationCountry.length !== 0 ? (
            <div className="popup-country__information">
              <div className="popup-country__item popup-country__item-region">
                <p className="popup-country__character">Khu vực</p>
                <p className="popup-country__text">
                  {informationCountry[0]?.region}
                </p>
              </div>
              <div className="popup-country__item popup-country__item-subregion">
                <p className="popup-country__character">Tiểu vùng</p>
                <p className="popup-country__text">
                  {informationCountry[0]?.subregion}
                </p>
              </div>
              <div className="popup-country__item">
                <p className="popup-country__character">Thủ đô</p>
                <p className="popup-country__text">
                  {informationCountry[0]?.capital[0]}
                </p>
              </div>
              <div className="popup-country__item popup-country__item-name">
                <p className="popup-country__name">
                  {informationCountry[0]?.name.common}
                </p>
                <div className="popup-country__line popup-country__line--1"></div>
                <div className="popup-country__line popup-country__line--2"></div>
                <div className="popup-country__line popup-country__line--3"></div>
                <div className="popup-country__line popup-country__line--4"></div>
                <div className="popup-country__line popup-country__line--5"></div>
                <div className="popup-country__line popup-country__line--6"></div>
              </div>
              <div className="popup-country__item">
                <p className="popup-country__character">Diện tích</p>
                <p className="popup-country__text">
                  {informationCountry[0]?.area.toLocaleString(2)} km<sup>2</sup>
                </p>
              </div>
              <div className="popup-country__item popup-country__item-population">
                <p className="popup-country__character">Dân số</p>
                <p className="popup-country__text">
                  {informationCountry[0]?.population.toLocaleString(2)} người
                </p>
              </div>
              <div className="popup-country__item popup-country__item-flag">
                <p className="popup-country__character">Quốc kỳ</p>
                <img
                  src={informationCountry[0]?.flags.png}
                  alt={informationCountry[0]?.name.common}
                  className="popup-country__flag"
                />
              </div>
            </div>
          ) : (
            <Loading></Loading>
          )}

          <div className="popup-country__date">
            <div className="popup-country__date-title">
              Thống kê số liệu covid-19 theo khoảng thời gian
            </div>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <ReactDatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                dateFormat={"dd/MM/yyyy"}
                className="popup-country__date-custom"
                placeholderText="Chọn theo khoảng thời gian"
                minDate={new Date("2020/01/22")}
              />
              <input
                type="submit"
                value="Lọc"
                className="popup-country__date-button"
              />
            </form>
          </div>
          <div className="popup-country__chart">
            {showChart ? (
              <HighchartsReact highcharts={Highcharts} options={options} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

PopupCountry.propTypes = {};

export default PopupCountry;
