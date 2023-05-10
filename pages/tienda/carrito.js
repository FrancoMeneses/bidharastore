import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import { StoreContext } from "@/context/store"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react"

export default function Carrito() {

  const { cart, handleProductCart, productCounter, setProductCounter, setOpenSidebar, count } = useContext(StoreContext)

  useEffect(() => {
    setOpenSidebar(false)
    let newCount = 0
    cart.forEach(product => {
      newCount = newCount + product.quantity
    })
    setProductCounter(newCount)
  },[cart])

  return(
    <Layout>
      <Navbartienda></Navbartienda>
      <div className="flex flex-col w-full min-h-screen px-1 py-2 font-text gap-5">
        <p className="text-center font-semibold text-[24px] font-text h-full w-full">CARRITO</p>
        <div className="flex flex-col w-full justify-center items-center">
          {cart && cart.length === 0 ? 
          <div className="flex flex-col w-full h-full justify-center items-center px-3 gap-6">
            <p className="text-center text-[20px]">Parece que no tienes productos en tu carrito aún 😔</p>
            <Link href='/tienda/brotes-microgreens' className="flex-no-shrink border-2 border-[#0495A8] text-center py-1 w-[170px] shadow-sm hover:shadow-lg font-semibold tracking-wider rounded-[10px]">Ir a la tienda</Link>
          </div>
          :
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p>{`VARIEDADES (${cart.length})`}</p>
            <p>{`PRODUCTOS (${productCounter})`}</p>
            <ul className="flex flex-col justify-center items-center gap-[25px] w-full">
              {cart.map( product => {
                return(
                    <li key={product.id} className="flex flex-col w-full justify-between items-center gap-[20px] py-2">
                      <div className="flex w-full justify-between md:justify-around items-center">
                        <div className="flex">
                          <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
                          src={product.image}
                          alt={`Foto de ${product.name}`}
                          width={600}
                          height={300} />
                          <div className="flex flex-col justify-center ml-4">
                            <p>{product.name}</p>
                            <p className="font-semibold">{product.presentation.name}</p>
                          </div>
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
                      <div className="w-full md:w-[90%] border-[1px] border-[#0495A8]"></div>
                    </li>
                )
              })}
            </ul>
            <div className="w-full flex flex-col justify-center items-center gap-4 py-3">
              <div className="flex flex-col w-[40%] self-end justify-center">
                <p className="font-semibold">{`SUBTOTAL: $${count}`}</p>
                <p className="text-justify text-sm font-light">Se le pedirán sus datos de contacto al finalizar su pedido</p>
              </div>
              <div className="flex flex-col w-full gap-2 justify-center items-center">
                <Link href='/tienda/brotes-microgreens' className="flex-no-shrink border-2 border-[#0495A8] text-center py-1 w-[200px] shadow-sm hover:shadow-lg font-semibold tracking-wider rounded-[10px]">Continuar comprando</Link>
                <Link href='/tienda/checkout' className="flex-no-shrink bg-[#0495A8] text-center py-1 w-[200px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]">Finalizar pedido</Link>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </Layout>
  )
}