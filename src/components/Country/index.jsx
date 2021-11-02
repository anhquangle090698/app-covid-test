import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";

Country.propTypes = {
  summaryCountries: PropTypes.array,
  quantityCountryShow: PropTypes.number,
  handlePopup: PropTypes.func,
  handleRemoveCountry: PropTypes.func,
  handleBookmarkCountry: PropTypes.func,
};

function Country({
  summaryCountries,
  quantityCountryShow,
  handlePopup,
  handleRemoveCountry,
  handleBookmarkCountry,
}) {
  return (
    <Fragment>
      {summaryCountries ? (
        summaryCountries?.slice(0, quantityCountryShow).map((countries) => {
          return (
            <tr className="total-country__tr" key={countries.ID}>
              <td className="total-country__td">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={
                    countries.bookmark
                      ? "total-country__td-icon--star active"
                      : "total-country__td-icon--star"
                  }
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {countries.Country}
              </td>
              <td className="total-country__td">
                {countries.TotalConfirmed.toLocaleString(2)}
              </td>
              <td className="total-country__td">
                {countries.TotalRecovered.toLocaleString(2)}
              </td>
              <td className="total-country__td">
                {countries.TotalDeaths.toLocaleString(2)}
              </td>
              <td className="total-country__td">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="total-country__td-icon"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    handlePopup(countries.CountryCode, countries.Slug);
                  }}
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </td>
              <td className="total-country__td">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="total-country__td-icon total-country__td-icon--bookmark"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    handleBookmarkCountry(countries.CountryCode);
                  }}
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="total-country__td-icon"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    handleRemoveCountry(countries.CountryCode);
                  }}
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="5">
            <Loading></Loading>
          </td>
        </tr>
      )}
    </Fragment>
  );
}

export default Country;
