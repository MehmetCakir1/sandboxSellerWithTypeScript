import { useEffect } from "react";
import { getProducts } from "../app/features/productsSlice";
import {useAppDispatch,useAppSelector} from "../app/hooks"
import SingleProduct from "./SingleProduct";

const Products = () => {
    const {products,loading,newProducts}=useAppSelector((state)=>state.products)
    const dispatch=useAppDispatch()
    // console.log(products);
    // console.log(newProducts);
    const allProducts=[...products,...newProducts]


    useEffect(() => {
        dispatch(getProducts())
      }, [])

      if (loading) {
        return <img className="block m-auto" src="images/spinner.gif" alt="loading-spinner" />
      }

  return (
    <div className="container m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-9 justify-center items-center">
        {
            allProducts.map((item)=>{
                return(
                    <SingleProduct key={item.id} item={item}/>
                )
            })
        }
    </div>
  )
}

export default Products