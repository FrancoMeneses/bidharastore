import { StoreContext } from "@/context/store"
import Image from "next/image"
import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"

export default function Productcard({ product }){

  const { handleModal } = useContext(StoreContext)

  return(
    <article id={product._id} onClick={handleModal} className='relative hover:cursor-pointer w-[150px] h-[180px] border-[1px] border-[#0495A8] rounded-3xl flex flex-col justify-around py-1 lg:px-2 items-center font-text lg:w-[230px] lg:h-[331px] lg:border-[1.5px] transition-all ease-in-out duration-100 md:hover:border-[#00243E] md:hover:border-[3px]'>
    {product.stock === 'Por pedido' ? 
    <span id={product._id} className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-[#014D64] text-white font-text rounded-xl px-3 font-semibold text-[10px] md:text-[12px] lg:text-[18px]">
      Por pedido      
    </span> : ''}
    {product.category === 'Escuelas' ? 
    <span id={product._id} className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-[#014D64] text-white font-text rounded-xl px-3 font-semibold text-[10px] md:text-[12px] lg:text-[18px]">
      Envío gratis      
    </span> : ''}
    {product?.stock === 'No disponible' ? 
    <span id={product._id} className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-red-500 text-white font-text rounded-xl px-3 font-semibold text-[10px] md:text-[12px] lg:text-[18px]">
      No disponible      
    </span> : ''}
    <Image id={product._id} className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
      src={product.image.url}
      alt={`Foto del producto ${product.name} de la categoría ${product.category}`}
      width={600}
      height={300} />
    <div id={product._id} className='flex h-auto justify-start items-center p-1 gap-2 w-full'>
      <div id={product._id} className='flex flex-col w-full justify-between items-start h-full px-1 lg:px-0'>
        <h3 id={product._id} className='text-[14px] font-semibold text-left lg:text-[22px]'>{product.name}</h3>
        {product.category !== 'Escuelas' ? 
        <h3 id={product._id} className='text-[12px] font-normal lg:text-[20px] text-left'>{product.category}</h3>
        :
        ''
        }
        <div id={product._id} className="w-full md:w-full md:h-auto self-center flex justify-center items-center py-2">
          <p id={product._id} className="group text-center text-[9px] md:text-[10px] lg:text-[14px] text-[#0495A8] md:hover:text-[#014D64] flex justify-center items-center gap-2">
            Agregar al carrito
            <FaShoppingCart id={product._id} className='text-[18px] text-[#0495A8] group-hover:text-[#014D64] pointer-events-none block' />
            {/* <FontAwesomeIcon id={product._id} icon={faCartShopping} className='text-[18px] text-[#0495A8] group-hover:text-[#014D64] pointer-events-none block' /> */}
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}