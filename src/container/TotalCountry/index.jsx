import Country from "components/Country";
import PopupCountry from "container/PopupCountry";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmarkCountry,
  getInformationCountryApi,
  removeCountry,
  sortDefault,
  sortHighestNumberDeaths,
  sortTotalConfirmed
} from "redux/actions/SummaryAction";

TotalCountry.propTypes = {
  summary: PropTypes.object,
  informationCountry: PropTypes.array,
  quantityCountryShow: PropTypes.number,
  togglePopup: PropTypes.bool,
  slug: PropTypes.string,
  handlePopup: PropTypes.func,
  closePopup: PropTypes.func,
  handleRemoveCountry: PropTypes.func,
  handleBookmarkCountry: PropTypes.func,
};

function TotalCountry(props) {
  const [quantityCountryShow, setQuantityCountryShow] = useState(10); // số lượng đất nước hiển thị khi click show more
  const [togglePopup, setTogglePopup] = useState(false); // bật tắt popup
  const [slug, setSlug] = useState("");

  const dispatch = useDispatch();

  const summary = useSelector((state) => state.SummaryReducer.summary);

  const informationCountry = useSelector(
    (state) => state.SummaryReducer.informationCountry
  );

  //Xử lý logic khi click hiển popup (show popup, set giá trị slug, gọi api lấy thông tin đất nước)
  const handlePopup = async (countryCode, slug) => {
    setTogglePopup(!togglePopup);
    setSlug(slug);

    dispatch(await getInformationCountryApi(countryCode));
  };

  //Xử lý logic đóng popup
  const closePopup = () => {
    setTogglePopup(!togglePopup);
  };

  //Xóa country được click
  const handleRemoveCountry = (countryCode) => {
    dispatch(removeCountry(countryCode));
  };

  //Thêm bookmark cho đất nước được click
  const handleBookmarkCountry = (countryCode) => {
    dispatch(addBookmarkCountry(countryCode));
  };

  return (
    <div className="total-country">
      <h3 className="total-country__title">
        Số liệu thống kê theo từng quốc gia
      </h3>
      <div className="total-country__filter">
        <div
          className="total-country__item"
          onClick={async () => {
            dispatch(await sortDefault());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-globe total-country__icon"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg>
          <span className="total-country__text">Danh sách ban đầu</span>
        </div>
        <div
          className="total-country__item"
          onClick={async () => {
            dispatch(await sortTotalConfirmed());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-funnel total-country__icon"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
          </svg>
          <span className="total-country__text">
            Sắp xếp theo số ca nhiễm nhiều nhất
          </span>
        </div>
        <div
          className="total-country__item"
          onClick={async () => {
            dispatch(await sortHighestNumberDeaths());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-funnel total-country__icon"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
          </svg>
          <span className="total-country__text">
            Sắp xếp theo số người chết nhiều nhất
          </span>
        </div>
      </div>
      <div className="total-country__container">
        <table className="total-country__table">
          <thead className="total-country__thead">
            <tr>
              <th className="total-country__th">Quốc gia</th>
              <th className="total-country__th">Số ca nhiễm</th>
              <th className="total-country__th">Số ca hồi phục</th>
              <th className="total-country__th">Số ca tử vong</th>
              <th className="total-country__th">Chi tiết</th>
              <th className="total-country__th">Tác vụ</th>
            </tr>
          </thead>
          <tbody className="total-country__tbody">
            <Country
              summaryCountries={summary.Countries}
              quantityCountryShow={quantityCountryShow}
              handlePopup={handlePopup}
              handleRemoveCountry={handleRemoveCountry}
              handleBookmarkCountry={handleBookmarkCountry}
            ></Country>
          </tbody>
        </table>
      </div>

      <div className="total-country__more">
        <button
          className="total-country__button"
          onClick={() => {
            setQuantityCountryShow(quantityCountryShow + 10);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="total-country__button-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          <span className="total-country__button-text">View more</span>
        </button>
      </div>
      {togglePopup && (
        <PopupCountry
          informationCountry={informationCountry}
          closePopup={closePopup}
          slug={slug}
        ></PopupCountry>
      )}
    </div>
  );
}

export default TotalCountry;
