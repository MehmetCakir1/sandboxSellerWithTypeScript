import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { INewProduct, IProducts, Product } from "../../types/interface"



export interface ProductState {
  products: IProducts['products']
  loading: boolean
  // newProducts: INewProduct[]
  // product: Product
}

const initialState: ProductState = {
  products: [],
  loading: false,
  // newProducts: [],
  // product: <Product>{}
}

export const getProducts = createAsyncThunk(
  'products/getProducts', async () => {
      return fetch(`https://dummyjson.com/products`)
          .then(res => {
              return res.json()
          })
  }
)


const productsSlice =createSlice({
  name:"products",
  initialState,
  reducers:{
  },
  extraReducers(builder:any){
    builder.addCase(getProducts.pending,(state:ProductState)=>{
      state.loading=true;
    })
    builder.addCase(getProducts.fulfilled,(state:ProductState,action:PayloadAction<IProducts>)=>{
      state.loading=false;
      state.products=action.payload.products
    })
    builder.addCase(getProducts.rejected,(state:ProductState)=>{
      state.loading=true;
    })

  }
})

export default productsSlice.reducer