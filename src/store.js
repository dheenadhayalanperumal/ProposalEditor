import { createStore, combineReducers } from 'redux';

const initialHeaderState = {
  company: "",
  prjName: "",
  creater: "",
  mobile: "",
  website: "",
  email: "",
  client: "",
  logo: "",
  bank: "",
  accName: "",
  accNum: "",
  Ifsc: "",
  branch: "",
};

const headerReducer = (state = initialHeaderState, action) => {
  switch (action.type) {
    case 'SET_HEADER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialSectionsState = [];

const sectionsReducer = (state = initialSectionsState, action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return [...state, action.payload];
    case 'UPDATE_SECTION':
      return state.map((section, index) =>
        index === action.index
          ? { ...section, content: [...section.content, action.content] }
          : section
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  header: headerReducer,
  sections: sectionsReducer,
});

const store = createStore(rootReducer);

export default store;