import type { IAction } from "../types/action.type"

export const initialState = {
  isLoading: false,
  theme: 'light',
  navbarExpand: true,
  colors: [],
}

export const appReducer = (state = initialState, action: IAction) => {
  console.log('appReducder: ', {
    state,
    action
  })
  switch (action.type) {
    case 'APP/SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'APP/HIDE_LOADING': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'APP/SET_THEME': {
      return {
        ...state,
        theme: action.payload.theme
      }
    }
    case 'APP/SELECTED_COLOR': {
      // code logic update any state that related to action
      return {
        ...state,
        colors: action.payload
      }
    }
    default:
      return state;
  }
}