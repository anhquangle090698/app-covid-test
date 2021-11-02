import {
  ADD_BOOKMARK_COUNTRY,
  GET_CASE_COUNTRY_BY_DATE,
  GET_INFORMATION_COUNTRY,
  GET_SUMMARY_ACTION,
  REMOVE_COUNTRY,
  REMOVE_DATA_CASE_COUNTRY_BY_DATE_AND_INFORMATION_COUNTRY,
  SORT_DEFAULT,
  SORT_HIGHEST_NUMBER_DEATHS,
  SORT_MOST_TOTAL_CONFIRMED_CASE,
} from "redux/constants/SummaryConst";

const stateInitial = {
  summary: {},

  informationCountry: [],

  caseCountryByDate: [],

  loading: false,
};

const SummaryReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case GET_SUMMARY_ACTION: {
      state.summary = action.payload;

      return { ...state };
    }

    case GET_INFORMATION_COUNTRY: {
      state.informationCountry = action.payload;

      return { ...state };
    }

    case GET_CASE_COUNTRY_BY_DATE: {
      state.caseCountryByDate = action.payload;

      return { ...state };
    }

    case REMOVE_DATA_CASE_COUNTRY_BY_DATE_AND_INFORMATION_COUNTRY: {
      state.caseCountryByDate = [];
      state.informationCountry = [];

      return { ...state };
    }

    case SORT_MOST_TOTAL_CONFIRMED_CASE: {
      const cloneSummary = [...state.summary.Countries];

      const sort = cloneSummary.sort(
        (a, b) => Number(b.TotalConfirmed) - Number(a.TotalConfirmed)
      );

      state.summary.Countries = sort;

      return { ...state, summary: { ...state.summary } };
    }

    case SORT_HIGHEST_NUMBER_DEATHS: {
      const cloneSummary = [...state.summary.Countries];

      const sort = cloneSummary.sort(
        (a, b) => Number(b.TotalDeaths) - Number(a.TotalDeaths)
      );

      state.summary.Countries = sort;

      return { ...state, summary: { ...state.summary } };
    }

    case SORT_DEFAULT: {
      const cloneSummary = [...state.summary.Countries];

      const sort = cloneSummary.sort((a, b) => {
        const nameA = a.Country.toUpperCase(); // ignore upper and lowercase
        const nameB = b.Country.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });

      state.summary.Countries = sort;

      return { ...state, summary: { ...state.summary } };
    }

    case REMOVE_COUNTRY: {
      const clone = [...state.summary.Countries];

      const filter = clone.filter(
        (country) => country.CountryCode !== action.payload
      );

      state.summary.Countries = filter;

      return { ...state, summary: { ...state.summary } };
    }

    case ADD_BOOKMARK_COUNTRY: {
      const clone = [...state.summary.Countries];

      const map = clone.map((country) => {
        if (country.CountryCode === action.payload) {
          if (country.bookmark) {
            return { ...country, bookmark: false };
          } else {
            return { ...country, bookmark: true };
          }
        }
        return country;
      });

      state.summary.Countries = map;

      return { ...state, summary: { ...state.summary } };
    }

    default:
      return { ...state };
  }
};

export default SummaryReducer;
