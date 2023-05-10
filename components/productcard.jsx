import { StoreContext } from "@/context/store"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export default function Productcard({ product }){

  // const urlname = product.name.toLowerCase()

  const { handleModal } = useContext(StoreContext)

  return(
    <article id={product._id} onClick={handleModal} className='hover:cursor-pointer w-[150px] h-[180px] border-[1px] border-[#0495A8] rounded-3xl flex flex-col justify-around py-1 items-center font-text lg:w-[230px] lg:h-[331px] lg:border-[1.5px] transition-all ease-in-out duration-100 hover:border-[#00243E] hover:border-[3px]'>
      <Image id={product._id} className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
        src={product.image.url}
        alt={`Foto de ${product.name}`}
        width={600}
        height={300} />
      <div id={product._id} className='flex w-auto h-auto justify-center items-center p-1 gap-2'>
        <div id={product._id} className='flex flex-col w-auto justify-between items-start h-full px-1 lg:px-0'>
          <p id={product._id} className='text-[14px] font-medium text-left lg:text-[22px]'>{product.name}</p>
          <p id={product._id} className='text-[12px] font-light lg:text-[20px] text-left'>{product.category}</p>
        </div>
        <div id={product._id} className="text-[10px] font-medium lg:text-[16px]">
          <div id={product._id} className='w-[1px] bg-black h-full lg:w-[2px]'></div>
          <p id={product._id} className="text-center">Agregar al carrito</p>
        </div>
      </div>
    </article>
  )
}