import connectMongo from 'utils/connectMongo'
import Test2 from '@/models/testmodel'
import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/context/store'
import { useRouter } from 'next/router'

export default function Singleproductpage({ product }) {

  const router = useRouter()

  const { setCurrentProduct, currentProduct, handleAdd, handlePresentation, currentPresentations, setCurrentPresentations } = useContext(StoreContext)

  useEffect(() => {
    setCurrentPresentations(product.presentations)
    setCurrentProduct({
      id: product._id + '/' + product.presentations[0].name,
      name: product.name,
      image: product.image.url,
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
    <Layout>
      <Navbartienda></Navbartienda>
      <div className='w-full px-2 my-3 flex flex-col font-text gap-5 md:px-[50px] justify-center items-center'>
        <div className='border border-[#0495A8] rounded-lg px-4 py-2 gap-3 flex flex-col w-full justify-center items-center md:flex-row md:justify-center md:gap-[60px] md:px-[20px] max-w-4xl'>
          <div className='md:flex md:w-[50%] justify-center items-center'>
            <Image id={product._id} className='w-[150px] md:w-[250px] h-fit object-contain aspect-square'
              src={product.image.url}
              alt={`Foto de ${product.name}`}
              width={600}
              height={300} />
          </div>
          <div className='md:flex-col md:w-[50%] justify-center items-center'>
            <div className='w-full flex flex-col justify-start'>
              <p className='font-semibold text-[#014D64] text-[22px]'>{product.name.toUpperCase()}</p>
              <p className='font-light text-[#00243E] text-[20px]'>{product.category.toUpperCase()}</p>
              <p className='font-light text-[#014D64] text-justify mt-2'>{product.description}</p>
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
              <p className='text-[20px] text-[#014D64] font-light'>Disponible</p>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-[22px] text-[#014D64] font-semibold'>Entrega estimada</p>
              <p className='text-[20px] text-[#014D64] font-light'>1 día hábil dentro de la ciudad de Puebla</p>
              <p className='text-[20px] text-[#014D64] font-light'>
                *Si requiere un pedido para otra ciudad visite:
                <Link href='/contacto' className=" w-fit text-center font-semibold px-2 ml-1 border border-[#014D64] hover:border-2 rounded-lg text-[16px]">
                  CONTACTO
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#0495A8] ml-1' />
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
              <button type="button" className="w-[50px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-l-lg text-[20px]" id='minus' onClick={handleProductQuantity}>-</button>
              <p className="w-[50px] h-[30px] text-center text-[#00243E] text-[20px] border border-[#0495A8]">{currentProduct.quantity}</p>
              <button type="button" className="w-[50px] h-[30px] bg-[#0495A8] text-[#00243E] rounded-r-lg text-[20px]" id='plus' onClick={handleProductQuantity}>+</button>
            </div>
            }
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button type="button" className="flex-no-shrink bg-[#30CED1] md:border-2 md:hover:border-[#014D64] text-center py-2 w-[210px] text-[20px] shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={handleNewProduct}>Agregar al carrito</button>
            <button type="button" className="flex-no-shrink bg-[#0495A8] md:border-2 md:hover:border-[#014D64] text-center py-2 w-[210px] text-[20px] shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full" onClick={handleNewOrder} >Pedir ahora</button>
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
      params: { id: element.name.toLowerCase() }
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
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  const response = await Test2.findOne({ name: name })

  return {
    props: {
      product: JSON.parse(JSON.stringify(response))
    }
  }
}