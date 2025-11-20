import { combineReducers, createStore } from "redux";
import { appReducer } from "./reduxs/app.reducer";
import { productReducer } from "./reduxs/product.reducer";

export const rootReducers = combineReducers({
  app: appReducer,
  product: productReducer,
})

const store = createStore(rootReducers);

export default store;

/* store
state = {
  app: {
    isLoading: false,
    theme: 'light',
    navbarExpand: true,
    colors: [],
  },
  product: {
    products: []
  },
}
// using: state => state.product.products

function storeReducer(state = state, action) {
  switch(action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        app: {
          ...state.app,
          isLoading: true
        }
      }
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        app: {
          ...state.app,
          isLoading: false
        }
      }
    }
    case 'SET_THEME': {
      return {
        ...state,
        app: {
          ...state.app,
          theme: action.payload.theme
        }
      }
    }
    case 'SELECTED_COLOR': {
      return {
        ...state,
        app: {
          ...state.app,
          colors: action.payload
        }
      }
    }
    case 'FETCH_PRODUCT': {
      return {
        ...state,
        product: {
          ...state.product,
          products: action.payload
        }
      }
    }
    default:
      return state;
  }
}

*/