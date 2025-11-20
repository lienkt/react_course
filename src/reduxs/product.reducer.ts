import type { IAction } from "../types/action.type"

export const initialState = {
  products: [],
  productThemeBg: 'white'
}

export const productReducer = (state = initialState, action: IAction) => {
  console.log('productReducer: ', {
    state,
    action
  });

  switch (action.type) {
    case 'PRODUCT/FETCH_PRODUCT': {
      return {
        ...state,
        products: action.payload
      }
    }
    case 'PRODUCT/SET_THEME': {
      return {
        ...state,
        productThemeBg: action.payload
      }
    }
    default:
      return state;
  }
}