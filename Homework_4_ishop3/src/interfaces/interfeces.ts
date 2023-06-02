export interface AppType {
  products: EditProduct[],
}

export interface Products {
  products: EditProduct[],
  activeId: number | null,
  setActiveId: (id: number) => void,
  deleteProduct: (key: number) => void,
  isEdit: boolean,
  isCreate: boolean,
  setCreate: () => void,
  setEditProduct: (product: EditProduct) => void,
  product: EditProduct,
  cancel: () => void,
  hasChanges: boolean,
  editProduct: (product: EditProduct) => void,
  save: (product: EditProduct) => void
}


export interface ProductType {
  product: EditProduct
  active: boolean,
  setActiveId: (id: number) => void,
  deleteProduct: (key: number) => void,
  setEditProduct: (product: EditProduct) => void,
  hasChanges: boolean
  keyValue: any
}

export interface Title {
  title: string;
}

export interface Title {
  title: string;
}

export interface EditProduct {
  id?: any
  name: string,
  url: string,
  price: number,
  stock: number
}

export interface EditProps {
  product: EditProduct,
  cancel: () => void,
  editProduct: (product: EditProduct) => void,
  save: (product: EditProduct) => void
}

export interface AddCartProps {
  title: string,
  cancel: () => void,
}
