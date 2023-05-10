import { StoreContext } from "@/context/store"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import Link from "next/link"

export default function ResumeCart() {

  const { cart, handleSidebarCart, handleProductCart, count } = useContext(StoreContext)

  return(
    <div id="modalSidebar" className="hidden flex-row space-y-4 min-w-screen h-full animated fadeIn faster fixed top-0 right-0 items-end inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50">
      <div id="elotrodiv" className="w-[25%] md:w-[50%] lg:w-[65%] h-full border-black" onClick={handleSidebarCart}></div>
      <div className="flex flex-col h-full bg-white w-[75%] md:w-[50%] lg:w-[35%] font-text relative overflow-auto">
        <button type="button" className="w-full min-h-[70px] bg-[#014D64] text-[20px] flex justify-center items-center gap-3 text-white" onClick={handleSidebarCart}>
        <FontAwesomeIcon icon={faChevronLeft} className='text-[26px]' />
        <p className="font-semibold">CERRAR</p>
        </button>
        <div className="w-full py-2 px-2 flex flex-col gap-4 justify-center items-center">
          { cart && cart.length === 0 ? 
            <div className="flex flex-col w-full h-full justify-center items-center px-3 gap-6">
              <p className="font-semibold">CARRITO</p>
              <p className="text-center text-[20px]">Parece que no tienes productos en tu carrito aún 😔</p>
              <Link href='/tienda/brotes-microgreens' className="flex-no-shrink border-2 border-[#0495A8] text-center py-1 w-[170px] shadow-sm hover:shadow-lg font-semibold tracking-wider rounded-[10px]">Ir a la tienda</Link>
            </div>
            :
            <>
          <p className="font-semibold">CARRITO</p>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">PEDIDO</p>
              <Link href='/tienda/carrito' className="font-semibold underline">Abrir carrito</Link>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">SUBTOTAL</p>
              <p className="font-semibold">{`$${count}`}</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            {cart.length !== 0 ?
              <>
                <button type="button" onClick={handleSidebarCart} className="flex-no-shrink border-2 border-[#0495A8] text-center py-1 w-[170px] shadow-sm hover:shadow-lg text-black font-semibold tracking-wider rounded-[10px]">Seguir comprando</button>
                <Link href='/tienda/checkout' className="flex-no-shrink bg-[#0495A8] text-center py-1 w-[170px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]">Finalizar pedido</Link>
              </>
              :
              <Link href='/tienda/brotes-microgreens' className="flex-no-shrink border-2 border-[#0495A8] text-center py-1 w-[170px] shadow-sm hover:shadow-lg font-semibold tracking-wider rounded-[10px]">Ir a la tienda</Link>
            }
          </div>
          <div className="w-full border-[1px] border-[#0495A8]"></div>
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-semibold">{`PRODUCTOS (${cart.length})`}</p>
            <ul className="flex flex-col justify-center items-center gap-[25px] w-full">
              {cart.map( product => {
                return(
                    <li key={product.id} className="flex flex-col w-full justify-between items-center gap-[20px] py-2">
                      <div className="flex w-full justify-between items-center">
                        <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
                        src={product.image}
                        alt={`Foto de ${product.name}`}
                        width={600}
                        height={300} />
                        <div className="w-full h-full flex flex-col justify-center ml-4">
                          <p>{product.name}</p>
                          <p className="font-semibold">{product.presentation.name}</p>
                        </div>
                        <p className="font-semibold">{`$${product.presentation.price}`}</p>
                      </div>
                      <div className="flex items-center justify-around w-full">
                        <div className="flex">
                          <button type="button" className="w-[30px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-l-lg text-[20px]" id={`minus ${product.id}`} onClick={handleProductCart}>-</button>
                          <p className="w-[40px] h-[30px] text-center text-[#00243E] text-[20px] border border-[#0495A8]">{product.quantity}</p>
                          <button type="button" className="w-[30px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-r-lg text-[20px]" id={`plus ${product.id}`} onClick={handleProductCart}>+</button>
                        </div>
                        <button id={`delete ${product.id}`} type="button" className="flex-no-shrink border-2 border-[#0495A8] text-center h-[30px] w-[100px] shadow-sm hover:shadow-lg font-semibold tracking-wider rounded-[10px]" onClick={handleProductCart}>Eliminar</button>
                      </div>
                    </li>
                )
              })}
            </ul>
          </div>
          </>
          }
        </div>
      </div>
    </div>
    // <div>
    //   <p>Carrito :D</p>
    //   <ul className='flex flex-col gap-4'>
    //         {cart && cart.map((product, index) => {
    //           return (
    //             <li key={index} className='flex flex-col gap-2 border border-black p-3'>
    //               <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
    //                 src={product.image}
    //                 alt={`Foto de ${product.name}`}
    //                 width={600}
    //                 height={300} />
    //                 <h2>{product.name}</h2>
    //                 <p>{product.category}</p>
    //                 <p>{product.presentation}</p>
    //                 <p>{product.quantity}</p>
    //             </li>
    //           )
    //         })}
    //       </ul>
    // </div>
  )
}