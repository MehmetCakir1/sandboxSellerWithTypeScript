import { INewProduct } from "../types/interface";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../app/hooks";
import { addANewProduct, addNewProduct } from "../app/features/productsSlice";

const Services = () => {
  const dispatch=useAppDispatch()
  const [newProduct, setNewProduct] = useState<INewProduct>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });


  const handleChange=(e:any)=>{
    setNewProduct({
      ...newProduct,
      id:Math.random(),
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    dispatch(addANewProduct({newProduct}))
    dispatch(addNewProduct(newProduct))
    setNewProduct({
      id: 0,
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: []
    })
  }

  return (
    <main className="container m-auto text-center py-3">
      <h1 className="text-center font-bold text-3xl text-[coral] ">
        New Product Details
      </h1>
      <form onSubmit={handleSubmit}>
        <section className="w-full max-w-3xl m-auto">
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="title" className="text-xl">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="title"
                value={newProduct?.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="stock" className="text-xl">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                placeholder="Stock"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="stock"
                value={newProduct?.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="description" className="text-xl">
                Description
              </label>
              <input
                type="text"
                id="description"
                placeholder="Description"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="description"
                value={newProduct?.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="brand" className="text-xl">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                placeholder="Brand"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="brand"
                value={newProduct?.brand}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="price" className="text-xl">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Price"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="price"
                value={newProduct?.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="category" className="text-xl">
                Category
              </label>
              <input
                type="text"
                id="category"
                placeholder="Category"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="category"
                value={newProduct?.category}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="discount" className="text-xl">
                Discount Percentage
              </label>
              <input
                type="number"
                id="discount"
                placeholder="Discount Percentage"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="discountPercentage"
                value={newProduct?.discountPercentage}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="thumbnail" className="text-xl">
                Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                placeholder="Thumbnail"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="thumbnail"
                value={newProduct?.thumbnail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="rating" className="text-xl">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                placeholder="Rating"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="rating"
                value={newProduct?.rating}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6/12">
              <label htmlFor="images" className="text-xl">
                Images
              </label>
              <input
                type="text"
                id="images"
                placeholder="Images"
                className="w-11/12 px-1 py-2 text-lg bg-blue-100"
                name="images"
                value={newProduct?.images}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <button className="bg-blue-600 text-white font-semibold text-xl py-1 px-3 mt-4">
          Add Product
        </button>
      </form>
    </main>
  );
};

export default Services;
