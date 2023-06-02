export interface AppType {
  products: EditProduct[],
}

export interface Products {
  products: EditProduct[],
  activeId: number | null,
  setActiveId: any,
  deleteProduct: any,
  isEdit: boolean,
  isCreate: boolean,
  setCreate: any,
  setEditProduct: any,
  product: EditProduct,
  cancel: any,
  hasChanges: boolean,
  editProduct: any,
  save: any
}


export interface ProductType {
  product: EditProduct
  active: boolean,
  setActiveId: any,
  deleteProduct: any,
  setEditProduct: any,
  hasChanges: boolean
  keyValue: number | null | undefined
}

export interface Title {
  title: string;
}

export interface Title {
  title: string;
}

export interface EditProduct {
  id?: number | null | undefined
  name: string,
  url: string,
  price: number,
  stock: number
}

export interface EditProps {
  product: EditProduct,
  cancel: any,
  editProduct: any,
  save: any
}

export interface AddCartProps {
  title: string,
  cancel: any,
}
