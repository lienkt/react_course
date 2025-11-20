export interface IAppState {
  isLoading: boolean,
  theme: string,
  navbarExpand: boolean,
  colors: string[],
}

export interface IProduct {
  products: any[],
}


export interface RootState {
  app: IAppState,
  product: IProduct
}