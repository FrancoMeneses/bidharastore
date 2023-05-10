import { StoreContext } from "@/context/store"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export default function ModalCart() {

  const { currentProduct, handleQuantity, handlePresentation, currentPresentations, handleAdd, hideModal} = useContext(StoreContext)

  const urlname = currentProduct?.name.toLowerCase()

  return(
      <div id="modalId" className="hidden flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50">
        <div className="flex flex-col p-4 bg-white rounded-2xl w-[350px] justify-center items-center font-text relative">
          <button className="absolute top-1 right-1 px-4 py-2 text-white rounded-full bg-red-500 font-bold" onClick={hideModal}>X</button>
          <div className="flex flex-col w-full h-full justify-center items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              { currentProduct?.image &&
                <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
                  src={currentProduct.image}
                  alt={`Foto de ${currentProduct.name}`}
                  width={600}
                  height={300} />
              }
              <div className="flex flex-col justify-center items-center">
                <p className="text-[#014D64] font-bold text-[24px]">{currentProduct?.name}</p>
                <p className="text-[#00243E] font-medium text-[20px]">{currentProduct?.category}</p>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <p className="text-[20px] text-[#014D64] font-bold">Elija una presentación</p>
                {currentPresentations?.map((presentation, index ) => {
                  return(
                    <div key={presentation.name} className="flex w-full justify-between items-center">
                      <div className="flex gap-2 self-start">
                        <input type="radio" defaultChecked={index === 0} id={presentation.name} value={currentPresentations[index].name} name="current" onClick={handlePresentation}/>
                        <label htmlFor={presentation.name.toLowerCase()} className="text-[20px]">{presentation.name}</label>
                      </div>
                      <p className="text-[20px] font-semibold text-[#014D64]">{`$${presentation.price}`}</p>
                    </div>
                  )
                })}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-[20px] text-[#014D64] font-bold">Cantidad</p>
                  <div className="flex items-center justify-center">
                    <button type="button" className="w-[50px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-l-lg text-[20px]" id='minus' onClick={handleQuantity}>-</button>
                    <p className="w-[50px] h-[30px] text-center text-[#00243E] text-[20px] border border-[#0495A8]">{currentProduct?.quantity}</p>
                    <button type="button" className="w-[50px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-r-lg text-[20px]" id='plus' onClick={handleQuantity}>+</button>
                  </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href={`/tienda/producto/${urlname}`} className="flex-no-shrink bg-[#30CED1] md:hover:border-[#014D64] text-center py-2 w-[170px] text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={hideModal}>Ver producto</Link>
              <button type="button" className="flex-no-shrink bg-[#0495A8] md:hover:border-[#014D64] text-center py-2 w-[170px] text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={handleAdd}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
  )
}