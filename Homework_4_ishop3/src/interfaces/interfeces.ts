export interface AppType {
  title: string,
  products: ProductType[]
}

export interface Products {
  title: string,
  products: ProductType[],
  activeId: string,
  setActiveId: any,
  deleteProduct: any
}


export interface ProductType {
  name: string,
  url: string,
  price: number,
  stock: number,
  active: boolean,
  setActiveId: any,
  deleteProduct: any
}

export interface Title {
  title: string;
}
