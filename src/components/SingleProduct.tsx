import { Link } from 'react-router-dom';
import { Product } from '../types/interface'

interface ICardProps {
    item : Product
  }
const SingleProduct = ({item}:ICardProps) => {
    const {id,thumbnail,title}=item;
  return (
    <div className='shadow-2xl p-2 hover:scale-105 max-w-[450px]'>
        <img src={thumbnail} alt={title} className="h-[240px] w-full" />
        <h4 className='font-bold text-xl py-2'>{title}</h4>
        <Link to="/about" className='bg-cyan-800 font-bold text-white py-1 px-7'>DETAIL</Link>
    </div>
  )
}

export default SingleProduct