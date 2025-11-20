export const showLoading = () => {
  return {
    type: 'APP/SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'APP/HIDE_LOADING'
  }
}

export const setTheme = (theme: string) => {
  return {
    type: 'APP/SET_THEME',
    payload: {
      theme
    }
  }
}

export const selectedColor = (colors: string[]) => {
  return {
    type: 'APP/SELECTED_COLOR',
    payload: colors
  }
}