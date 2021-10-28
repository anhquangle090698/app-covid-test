import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Country({ summaryCountries, value }) {
  return (
    <Fragment>
      {summaryCountries?.slice(0, value).map((countries) => {
        return (
          <tr className="total-country__tr" key={countries.ID}>
            <td className="total-country__td">{countries.Country}</td>
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
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </td>
          </tr>
        );
      })}
    </Fragment>
  );
}

Country.propTypes = {
  summaryCountries: PropTypes.array,
};

export default Country;
