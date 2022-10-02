import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getASingleProduct } from '../app/features/productsSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

const Details = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const dispatch=useAppDispatch()
  const product=useAppSelector((state)=>state.products.product)
  const {loading}=useAppSelector((state)=>state.products)
  const{title,description,brand,discountPercentage,images,price,rating,stock,category,thumbnail}=product

  useEffect(() => {
    dispatch(getASingleProduct({id}))
  }, [])
  
  if(loading){
    return <img className="block m-auto " src="images/spinner.gif" alt="loading-spinner" />
  }

  return (
    <>
    <button className='bg-orange-400 mx-3 lg:mx-9 my-3 rounded-sm py-1 px-3 font-semibold' onClick={()=>navigate("/")}>BACK TO HOME</button>
        <div className='flex flex-col lg:flex-row container m-auto py-5'>
      <div className='lg:w-6/12'>
        <h1 className='font-bold text-3xl px-3'>{title}</h1>
        <img src={thumbnail} alt={title} className="w-full h-[25rem] p-3 object-cover " />
        <p className='p-3 text-lg'>{description}</p>
      </div>
      <div className='lg:w-6/12'>
        <h1 className='font-bold text-2xl px-3'>Tags</h1>
        <p className='text-xl px-3 py-2 capitalize'>{category}</p>
        <h1 className='px-3 py-3 lg:py-1 text-2xl font-bold'>Images</h1>
        <div className='grid grid-cols-4 gap-3 px-3 py-3 lg:py-0'>
          {images?.map((item,index)=>{
          return(
            <img src={item} alt={title} key={index} className="h-[6.5rem] w-full object-cover border border-1 border-blue-600" />
          )
        })}
        </div>
        <h1 className='px-3 py-3 lg:py-0 text-2xl font-bold'>Informations</h1>
        <p className='px-3 py-1'><span className='text-blue-800 font-semibold inline-block w-[5rem]'>Price:</span>${price}</p>
        <p className='px-3 py-1'><span className='text-blue-800 font-semibold inline-block w-[5rem]'>Discount:</span>{discountPercentage}%</p>
        <p className='px-3 py-1'><span className='text-blue-800 font-semibold inline-block w-[5rem]'>Stock:</span>{stock}</p>
        <p className='px-3 py-1'><span className='text-blue-800 font-semibold inline-block w-[5rem]'>Rating:</span>{rating}</p>
      </div>
    </div>
    </>

  )
}

export default Details