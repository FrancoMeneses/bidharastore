import Layout from "@/components/layout"
import { StoreContext } from "@/context/store"
import { useContext, useEffect } from "react"
import { useRouter } from 'next/router'
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Checkout() {

  const titlePage = `Checkout | Bidhara`
  const descPage = ``
  const imgUrl = ''
  const urlPage = `https://bidharamexico.com/tienda/checkout`

  const { cart, productCounter, setProductCounter, setOpenSidebar, form, handleEditForm, handleSubmitForm, count, hasStock, hasCatEscuela } = useContext(StoreContext)
  const router = useRouter()

  useEffect(() => {
    if(cart.length === 0){
      router.push('/tienda/brotes-microgreens')
    }
    setOpenSidebar(false)
    let newCount = 0
    cart.forEach(product => {
      newCount = newCount + product.quantity
    })
    setProductCounter(newCount)
  }, [cart])

  return (
    <Layout title={titlePage} url={urlPage}>
      <div className="w-full flex flex-col md:flex-row-reverse">
        <div className="bg-gradient-to-b from-[#0495A8] to-[#014D64] md:border-2 md:border-[#30CED1] flex flex-col w-full py-6 items-center text-white font-text">
          <div className="flex flex-col justify-center items-center gap-[25px] w-full">
            <h1 className="font-semibold">{`RESUMEN DEL PEDIDO`}</h1>
            <div className="flex w-full justify-center items-center gap-10">
              <p className="font-semibold">{`VARIEDADES (${cart.length})`}</p>
              <p className="font-semibold">{`PRODUCTOS (${productCounter})`}</p>
            </div>
            <ul className="w-full">
              {cart.map(product => {
                return (
                  <li key={product.id} className="flex flex-col w-full justify-between items-center gap-[20px] py-2 pr-4 pl-2">
                    <div className="flex w-full justify-between md:px-6 items-center">
                      <div className="flex">
                        <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
                          src={product.image}
                          alt={`Foto del producto ${product.name} de la categoría ${product.category}`}
                          width={600}
                          height={300} />
                        <p>{`x${product.quantity}`}</p>
                        <div className="flex flex-col justify-center ml-4">
                          {product.stock === 'Por pedido' ? 
                            <span id={product._id} className="bg-[#014D64] w-[80px] md:w-[100px] lg:w-[130px] text-center text-white font-text rounded-xl px-3 font-semibold text-[10px] md:text-[12px] lg:text-[16px]">
                              Por pedido      
                            </span> : ''}
                          <p>{product.name}</p>
                          <p className="font-semibold">{product.presentation.name}</p>
                        </div>
                      </div>
                      <p className="font-semibold">{`$${(product.presentation.price * product.quantity)}`}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <Link href='/tienda/carrito' type="submit" className="flex-no-shrink bg-[#0495A8] border-2 border-white text-center py-1 w-[200px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]">Modificar carrito</Link>
          </div>
          <div className="w-[90%] border-[1px] border-[#0495A8] my-5"></div>
          <div className="flex flex-col gap-2 py-3 w-full px-4 lg:px-7 font-semibold">
            <div className="flex w-full justify-between">
              <p>Subtotal</p>
              <p>{`$${count}`}</p>
            </div>
            <div className="flex w-full justify-between">
              <p>Envío</p>
              <p>{count >= 100 ? `GRATIS` : `$35`}</p>
            </div>
          </div>
          <div className="w-[90%] border-[1px] border-[#0495A8] my-5"></div>
          <div className="flex flex-col gap-2 py-3 w-full px-4 lg:px-7 font-semibold">
            <div className="flex w-full justify-between">
              <p>Total</p>
              <p>{count >= 100 ? `$${count}` : `$${count + 35}`}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmitForm} className="w-full px-2 flex flex-col font-text justify-start items-center gap-[20px] py-6 lg:px-6">
          <div className="w-full flex flex-wrap gap-2 items-center">
          <div className="text-justify leading-relaxed">
                <p>*El descuento del 15% en primera compra <span className="font-semibold">se verificará y hará valido a través de WhastApp.</span></p>
              </div> 
            {hasStock ? 
              <div className="text-justify leading-relaxed">
                <p>*Tu carrito contiene un producto &quot;Por pedido&quot; estos productos <span className="font-semibold">están sujetos a disponibilidad y pueden demorar más tiempo en entregarse.</span></p>
              </div> 
              : ''}
            {hasCatEscuela ? 
              <div className="text-justify leading-relaxed">
                <p>Envío GRATIS del producto Mix para Estudiantes *Válido solo para entregas en escuelas de gastronomía dentro de la Ciudad de Puebla, <span className="font-semibold">se hará el descuento del envío a través de WhatsApp.</span></p>
              </div> 
              : ''}
            <p className="text-justify leading-relaxed">
              *Los envíos <strong className="font-semibold">solo están disponibles en la ciudad de Puebla</strong>, si requieres información para envíos a otra ciudad o estado visita la sección de
              <Link href='/contacto' className="w-fit text-center font-semibold px-3 py-1 ml-1 md:ml-[10px] border border-[#014D64] hover:border-2 rounded-lg">
                CONTACTO
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#0495A8] ml-1' />
              </Link>
            </p>
          </div>
          {/* Info de contacto */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <p className="w-full font-semibold text-center text-[22px] md:self-start">Información de contacto</p>
            <div className="w-full flex flex-col justify-center items-center gap-[10px]">
              <div className="w-full flex justify-between gap-[10px]">
                <div className="w-full flex flex-col">
                  <label htmlFor="nombre-i" className="self-start">Nombre del cliente<span className="font-semibold text-red-500">*</span></label>
                  <input id="nombre-i" name="nombre" placeholder="Ej. Juan Pérez" maxLength={50} type="text" value={form.nombre} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                  <p id="nombre-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="lugar-i" className="self-start">Si es un lugar establecido ingrese el nombre</label>
                <input id="lugar-i" name="lugar" placeholder="Ej. Viña Gourmet, ISU, UTP, etc." maxLength={50} type="text" value={form.lugarestablecido} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
              </div>
            </div>
          </div>
          {/* Info de envio */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <p className="font-semibold md:self-start w-full text-center text-[22px]">Información de envío</p>
            <div className="w-full flex flex-col justify-center items-center gap-[10px]">
              <div className="w-full flex flex-col">
                <label htmlFor="callenum-i" className="self-start">Calle y número<span className="font-semibold text-red-500">*</span></label>
                <input id="callenum-i" name="callenum" placeholder="Ej. Av. Zaragoza 16" maxLength={50} type="text" value={form.calleYnum} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                <p id="callenum-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="colonia-i" className="self-start">Colonia<span className="font-semibold text-red-500">*</span></label>
                <input id="colonia-i" name="colonia" placeholder="Ej. Satélite" maxLength={25} type="text" value={form.colonia} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                <p id="colonia-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
              </div>
              <div className="w-full flex justify-between gap-[10px]">
                <div className="w-[65%] flex flex-col">
                  <label htmlFor="tipo-i" className="self-start">Casa, local, etc</label>
                  <input id="tipo-i" name="tipo" placeholder="Ej. Casa, departamento" maxLength={30} type="text" value={form.tipoestablecimiento} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                  {/* <p id="tipo-p" className="hidden italic text-red-500">Este campo es obligatorio</p> */}
                </div>
                <div className="w-[35%] flex flex-col">
                  <label htmlFor="cp-i" className="self-start">Código postal<span className="font-semibold text-red-500">*</span></label>
                  <input id="cp-i" name="cp" placeholder="Ej. 70000" type="number" maxLength={5} value={form.cp} onChange={handleEditForm} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                  <p id="cp-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-justify">*Se creará un mensaje de WhatsApp con tus productos y la
              información que proporcionaste en este formulario para crear tu pedido, se te confirmará
              la fecha y hora a través de WhatsApp.
            </p>
          </div>
          <button type="submit" className="text-[18px] flex-no-shrink bg-[#0495A8] text-center py-2 w-[200px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]">Hacer pedido</button>
        </form>
      </div>
    </Layout>
  )
}