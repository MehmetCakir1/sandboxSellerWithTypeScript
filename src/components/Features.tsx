import { GiMoneyStack,GiHealthPotion } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { useSelector } from 'react-redux/es/exports';

const Features = () => {
  return (
    <section className='container grid grid-cols-4 gap-4 m-auto my-5'>
    <div className='py-5 flex flex-col justify-center items-center text-orange-600  shadow-xl bg-blue-100 rounded-xl hover:scale-110' >
        <GiMoneyStack className='text-4xl'/>
        <p  className='text-xl'>Cheap</p>
        </div>
        <div className='py-5 flex flex-col justify-center items-center text-cyan-600 shadow-xl bg-blue-100 rounded-xl hover:scale-110'>
            <FaShippingFast className='text-4xl'/>
            <p className='text-xl'>Fast</p>
            </div>
        <div className='py-5 flex flex-col justify-center items-center text-green-600 shadow-xl bg-blue-100 rounded-xl hover:scale-110'>
            <GiHealthPotion className='text-4xl'/>
            <p className='text-xl'>Healty</p>
            </div>
        <div className='py-5 flex flex-col justify-center items-center text-pink-600 shadow-xl bg-blue-100 rounded-xl hover:scale-110'>
            <TbShoppingCartDiscount className='text-4xl'/>
            <p className='text-xl'>Discount</p>
            </div>
    </section>
  )
}

export default Features