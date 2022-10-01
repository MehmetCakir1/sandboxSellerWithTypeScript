import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { INewProduct, IProducts, Product } from "../../types/interface"



export interface ProductState {
  products: IProducts['products']
  loading: boolean
  newProducts: INewProduct[]
  product: Product
}
    
const initialState: ProductState = {
  products: [],
  loading: false,
  newProducts: [],
  product: <Product>{}
}

//to get all products
export const getProducts = createAsyncThunk(
  'products/getProducts', async () => {
      return fetch(`https://dummyjson.com/products`)
          .then(res => {
              return res.json()
          })
  }
)
//to get a single products
export const getASingleProduct = createAsyncThunk(
  'products/getASingleProduct', async ({id}:any) => {
      return fetch(`https://dummyjson.com/products/${id}`)
          .then(res => {
              return res.json()
          })
  }
)
//to add a newproduct
export const addANewProduct=createAsyncThunk(
  "products/addANewProduct",async({newProduct}:any)=>{
    const response = await fetch(`https://dummyjson.com/products/`, {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          discountPercentage: newProduct.discountPercentage,
          rating: newProduct.rating,
          stock: newProduct.stock,
          brand: newProduct.brand,
          category: newProduct.category,
          thumbnail: newProduct.thumbnail,
          images: newProduct.images,
      })
  });
  const data = await response.json()
  return data;
  }
)

const productsSlice =createSlice({
  name:"products",
  initialState,
  reducers:{
    addNewProduct:(state,action : PayloadAction<INewProduct>)=>{
      state.products.push(action.payload)
    }
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
    builder.addCase(getASingleProduct.pending,(state:ProductState)=>{
      state.loading=true;
    })
    builder.addCase(getASingleProduct.fulfilled,(state:ProductState,action:PayloadAction<Product>)=>{
      state.loading=false;
      state.product=action.payload
    })
    builder.addCase(getASingleProduct.rejected,(state:ProductState)=>{
      state.loading=true;
    })
    builder.addCase(addANewProduct.pending, (state: ProductState) => {
      state.loading = true;
  })
  builder.addCase(addANewProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
      state.loading = false;

  })
  builder.addCase(addANewProduct.rejected, (state: ProductState) => {
      state.loading = false;
  })

  }
})
export const {addNewProduct}=productsSlice.actions
export default productsSlice.reducer