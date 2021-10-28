import {
  GET_SUMMARY_ACTION,
  SORT_DEFAULT,
  SORT_HIGHEST_NUMBER_DEATHS,
  SORT_MOST_TOTAL_CONFIRMED_CASE,
} from "redux/constants/SummaryConst";

const stateInitial = {
  summary: {},
};

const SummaryReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case GET_SUMMARY_ACTION: {
      state.summary = action.payload;

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

    default:
      return { ...state };
  }
};

export default SummaryReducer;
