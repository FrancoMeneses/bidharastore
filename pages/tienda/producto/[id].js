import connectMongo from '@/utils/connectmongo'
import Test2 from '@/models/testmodel'
import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa"
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { StoreContext } from '@/context/store'
import { useRouter } from 'next/router'

export default function Singleproductpage({ product }) {

  const titlePage = `${product.name} | ${product.category} | Bidhara México`
  const descPage = `Venta de ${product.category}, somos proveedores para tus eventos importantes, platillos únicos, cocina experimental o mixología.`
  let imgUrl = ''
  const urlPage = `https://bidharamexico.com/tienda/producto/${product._id}`
  switch(product.category){
    case 'Brotes - Microgreens':
      imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686244076/Bidhara/products/shared/BrotesComestibles.png'
      break
    case 'Flores comestibles':
      imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686244077/Bidhara/products/shared/FloresComestibles.png'
      break
    case 'Hojas baby':
      imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686244077/Bidhara/products/shared/Hojas_Baby.png'
      break
    case 'Microvegetales':
      imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686244076/Bidhara/products/shared/Microvegetales.png'
      break
      default:
        imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686257680/Bidhara/products/shared/General.png'
  }

  const router = useRouter()

  const { setCurrentProduct, currentProduct, handleAdd, handlePresentation, currentPresentations, setCurrentPresentations } = useContext(StoreContext)

  useEffect(() => {
    setCurrentPresentations(product.presentations)
    setCurrentProduct({
      id: product._id + '/' + product.presentations[0].name,
      name: product.name,
      image: product.image.url,
      category: product.category,
      stock: product.stock,
      presentation: product.presentations[0],
      quantity: 1
    })
  }, [product, setCurrentProduct, setCurrentPresentations])

  const handleProductQuantity = (e) => {
    if(e.target.id === 'minus'){
      if(currentProduct.quantity === 1){
        setCurrentProduct({
          ...currentProduct,
          quantity: 1
        })
      }else{
        setCurrentProduct({
          ...currentProduct,
          quantity: currentProduct.quantity - 1
        })
      }
    }
    if(e.target.id === 'plus')
    setCurrentProduct({
      ...currentProduct,
      quantity: currentProduct.quantity + 1
    })
  }

  const handleNewProduct = (e) => {
    handleAdd()
  }

  const handleNewOrder = () => {
    handleAdd()
    router.push('/tienda/checkout')
  }

  return (
    <Layout title={titlePage} description={descPage} url={urlPage} image={imgUrl}>
      <Navbartienda></Navbartienda>
      <div className='w-full h-full px-2 my-3 flex flex-col font-text gap-5 md:px-[50px] justify-center items-center'>
        <div className='border border-[#0495A8] rounded-lg px-4 py-2 gap-3 flex flex-col w-full h-full items-center md:flex-row md:justify-center md:gap-[60px] md:px-[20px] max-w-4xl'>
          <div className='flex md:w-[50%] flex-col items-center justify-center md:h-[430px]'>
            <Image id={product._id} className='w-[150px] md:w-[250px] md:h-[90%] object-contain aspect-square'
              src={product.image.url}
              alt={`Foto del producto ${product.name} de la categoría ${product.category}`}
              priority
              width={600}
              height={300} />
              <div className='h-[10%] flex flex-col justify-end'>
                <p className='italic text-[#00243E] text-[12px] place-self-end'>Imagen ilustrativa. El tamaño, forma y color del producto puede no ser exactamente igual a la foto de referencia.</p>
              </div>
          </div>
          <div className='md:flex-col md:w-[50%] justify-center items-center'>
            <div className='w-full flex flex-col justify-start'>
              <p className='font-semibold text-[#014D64] text-[22px]'>{product.name.toUpperCase()}</p>
              {product.category !== 'Escuelas' ? 
                <p className='font-light text-[#00243E] text-[20px]'>{product.category.toUpperCase()}</p>
                :
                ''
              }
              <p className='font-light text-[#014D64] text-justify mt-2'>{product.description}</p>
              {product.category === 'Escuelas' ? 
                <p className='font-medium text-[#014D64] text-justify mt-2'>{`*Precio de entrega sin costo válido solo para entregas en escuelas de gastronomía.`}</p>
                :
                ''
              }
            </div>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-[22px] text-[#014D64] font-semibold'>Presentaciones</p>
              <ul className='flex flex-col w-full justify-center items-center'>
                {product.presentations.map(presentation => {
                  return (
                    <li key={presentation._id} className='w-full'>
                      <p className='text-[20px] text-[#014D64] font-light'>🌱 {presentation.name}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-[22px] text-[#014D64] font-semibold'>Disponibilidad</p>
              {product?.stock === 'Disponible' ? 
              <p className='text-[20px] text-[#014D64] font-light'>{product.stock}</p> 
              :
              <p className='text-[20px] text-red-500 font-light'>{product.stock}</p>
              }
            </div>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-[22px] text-[#014D64] font-semibold'>Entrega estimada</p>
              <p className='text-[20px] text-[#014D64] font-light'>1 día hábil dentro de la ciudad de Puebla</p>
              <p className='text-[20px] text-[#014D64] font-medium'>
                *Si requiere un pedido para otra ciudad visite:
                <Link href='/contacto' className="w-fit h-fit inline-flex justify-center items-center ml-1 md:ml-2 gap-1 font-semibold px-2 border border-[#014D64] hover:border-[1px] rounded-lg">
                    CONTACTO
                  <FaExternalLinkAlt className='text-[#0495A8] text-[14px] md:text-[16px]' />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-6 px-2 max-w-xl'>
          <div className='flex flex-col w-full'>
            <p className="text-[20px] text-[#014D64] font-bold text-center">Presentación</p>
            {currentPresentations?.map((presentation, index ) => {
                  return(
                    <div key={presentation.name} className="flex w-full justify-between items-center">
                      <div className="flex gap-2 self-start">
                        <input type="radio" checked={currentProduct.presentation.name === presentation.name} value={presentation.name} id={presentation.name} name="current" onChange={handlePresentation}/>
                        <label htmlFor={presentation.name} className="text-[20px]">{presentation.name}</label>
                      </div>
                      <p className="text-[20px] font-semibold text-[#014D64]">{`$${presentation.price}`}</p>
                    </div>
                  )
                })}
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-[20px] text-[#014D64] font-bold">Cantidad</p>
            { currentProduct && 
              <div className='w-full flex items-center justify-center'>
              <button type="button" disabled={product?.stock === 'No disponible'} className="w-[50px] h-[30px] disabled:opacity-50 disabled:pointer-events-none bg-[#0495A8] text-[#00243E] rounded-l-lg text-[20px]" id='minus' onClick={handleProductQuantity}>-</button>
              <p className="w-[50px] h-[30px] text-center text-[#00243E] text-[20px] border border-[#0495A8]">{currentProduct.quantity}</p>
              <button type="button" disabled={product?.stock === 'No disponible'} className="w-[50px] h-[30px] disabled:opacity-50 disabled:pointer-events-none bg-[#0495A8] text-[#00243E] rounded-r-lg text-[20px]" id='plus' onClick={handleProductQuantity}>+</button>
            </div>
            }
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button disabled={product?.stock === 'No disponible'} type="button" className="flex-no-shrink bg-[#30CED1] md:border-2 md:hover:border-[#014D64] disabled:opacity-50 disabled:pointer-events-none text-center py-2 w-[210px] text-[20px] shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={handleNewProduct}>Agregar al carrito</button>
            <button disabled={product?.stock === 'No disponible'} type="button" className="flex-no-shrink bg-[#0495A8] md:border-2 md:hover:border-[#014D64] disabled:opacity-50 disabled:pointer-events-none text-center py-2 w-[210px] text-[20px] shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={handleNewOrder} >Pedir ahora</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  await connectMongo()
  const response = await Test2.find()
  const res = JSON.parse(JSON.stringify(response))
  const ids = res.map(element => {
    const obj = {
      params: { id: element._id }
    }
    return obj
  })

  return {
    paths: ids,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  await connectMongo()
  const { id } = params
  const response = await Test2.findOne({ _id: id })

  return {
    props: {
      product: JSON.parse(JSON.stringify(response))
    }
  }
}