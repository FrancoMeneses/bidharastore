import connectMongo from '@/utils/connectmongo'
import Test3 from '@/models/testmodel'
import Layout from "@/components/layout"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShippingFast, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
import Productcard from "@/components/productcard"
import { useContext, useEffect } from "react"
import { StoreContext } from "@/context/store"
import IndexCarousel from '@/components/carousel'

export default function Home({ products }) {

  const { setAllproducts, bestSellerProducts, setBestSellerProducts } = useContext(StoreContext)

  useEffect(() => {
    const sorted = products.toSorted(function(a, b){return a.priority-b.priority})
    setAllproducts(sorted)

    if (sorted.length !== 0)
      setBestSellerProducts(sorted.filter(product => {
        return product.bestSeller === true
      }))
  }, [products])

  const titlePage = 'Proveedor de Flores comestibles | Microgreens Brotes en Puebla'
  const descPage = 'Venta de Flores comestibles, Brotes o Microgreens, Hojas baby y Microvegetales para tus mejores platillos, cocina experimental o mixología.'
  const imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686257680/Bidhara/products/shared/General.png'
  const urlPage = 'https://bidharamexico.com/'

  return (
    <>
      <Layout title={titlePage} description={descPage} url={urlPage}>
        <div className='w-full h-fit'>
          {/* Banner 1 */}
          <IndexCarousel></IndexCarousel>
          {/* Container sections */}
          <div className='flex flex-col px-2 justify-center items-center md:gap-6'>
            {/* Second section PEDIDO */}
            <section id='pasosparapedido' className='my-6 px-2 md:px-16 flex flex-col gap-6 font-text'>
              <h2 className='text-[24px] text-center font-semibold md:text-[28px] lg:text-[30px]'>Pasos para realizar un pedido</h2>
              <div className='w-full h-auto grid grid-cols-3 grid-rows-2 gap-2 place-content-center place-items-center lg:flex lg:gap-4 lg:justify-between lg:items-center'>
                <div className='flex flex-col justify-between items-center gap-1 md:h-[185px] lg:gap-6 lg:h-[230px]'>
                  <Image className='w-[38px] h-[55px] md:w-[76px] md:h-[111px] lg:w-[100px] lg:h-[145px]'
                    src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1683864449/Bidhara/cart-proceso_l2u8bc.svg'
                    alt='Carrito'
                    width={38}
                    height={55} />
                  <p className='w-full font-semibold text-[12px] text-center md:text-center md:text-[15px] lg:text-[16px]'>
                    Visita la tienda y agrega los productos a tu carrito
                  </p>
                </div>
                <FontAwesomeIcon icon={faRightLong} className='text-[39px] text-[#0495A8]' />
                <div className='flex flex-col justify-between items-center gap-1 md:h-[185px] lg:gap-6 lg:h-[230px]'>
                  <FontAwesomeIcon icon={faWhatsapp} className='text-[39px] md:text-[90px] lg:text-[130px] text-[#0495A8]' />
                  <p className='w-full font-semibold text-[12px] text-center md:text-center md:text-[15px] lg:text-[16px]'>
                    Realiza el pedido en la página y te enviará a nuestro WhatsApp con los detalles de tu pedido
                  </p>
                </div>
                <FontAwesomeIcon icon={faRightLong} className='hidden lg:block text-[39px] text-[#0495A8]' />
                <div className='flex flex-col justify-between items-center gap-1 lg:gap-6 lg:h-[230px]'>
                  <FontAwesomeIcon icon={faStore} className='text-[39px] md:text-[90px] lg:text-[114px] text-[#0495A8]' />
                  <p className='w-full font-semibold text-[12px] text-center md:text-center md:text-[15px] lg:text-[16px]'>
                    Te responderemos para acordar tu pedido y empezaremos a prepararlo
                  </p>
                </div>
                <FontAwesomeIcon icon={faRightLong} className='text-[39px] text-[#0495A8]' />
                <div className='flex flex-col justify-between items-center gap-1 lg:gap-6 lg:h-[230px]'>
                  <FontAwesomeIcon icon={faShippingFast} className='text-[39px] md:text-[90px] lg:text-[114px] text-[#0495A8]' />
                  <p className='w-full font-semibold text-[12px] text-center md:text-center md:text-[15px] lg:text-[16px]'>
                    Enviaremos tus productos en la fecha y hora acordada
                  </p>
                </div>
              </div>
            </section>
            {/* third section DIFERENTE CATEGORIAS */}
            <section id='categorias' className='flex flex-col w-full md:my-12 px-2 md:px-4 lg:px-16 gap-6 justify-center items-center font-text'>
              <h2 className='text-[24px] text-center font-semibold md:text-[28px] lg:text-[30px]'>Categorías</h2>
              <div className='w-full grid grid-rows-1 grid-cols-1 place-content-center place-items-center content-center md:flex md:justify-center items-center gap-[45px] md:gap-2 lg:gap-6'>
                <Link href='/tienda/brotes-microgreens' className='flex flex-col lg:gap-3 w-full md:w-[25%] h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] md:rounded-3xl transition-all ease-in-out duration-200 md:hover:border-[#00243E] md:hover:border-[3px] md:px-1 lg:px-2'>
                  <h3 className='rounded-md h-fit text-center text-black text-[16px] lg:text-[24px] font-semibold'>Brotes - Microgreens</h3>
                  <Image className='w-full h-full object-contain rounded'
                    src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685314255/Bidhara/products/microgreens/catBrotes.png'
                    alt='Foto de platillo con brotes o microgreens'
                    width={1600}
                    height={781}
                  />
                </Link>
                <Link href='/tienda/flores-comestibles' className='flex flex-col lg:gap-3 w-full md:w-[25%] h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] md:rounded-3xl transition-all ease-in-out duration-200 md:hover:border-[#00243E] md:hover:border-[3px] md:px-1 lg:px-2'>
                  <h3 className='rounded-md h-fit text-center text-black text-[16px] lg:text-[24px] font-semibold'>Flores comestibles</h3>
                  <Image className='w-full h-full object-contain rounded'
                    src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685314129/Bidhara/products/flores-comestibles/CatFlores.png'
                    alt='Foto de platillo con flores comestibles'
                    width={1600}
                    height={781}
                  />
                </Link>
                <Link href='/tienda/hojas-baby' className='flex flex-col lg:gap-3 w-full md:w-[25%] h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] md:rounded-3xl transition-all ease-in-out duration-200 md:hover:border-[#00243E] md:hover:border-[3px] md:px-1 lg:px-2'>
                  <h3 className='rounded-md h-fit text-center text-black text-[16px] lg:text-[24px] font-semibold'>Hojas baby</h3>
                  <Image className='w-full h-full object-contain rounded'
                    src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685314297/Bidhara/products/hojas-baby/CatHojas.png'
                    alt='Foto de platillo con hojas baby'
                    width={1600}
                    height={781}
                  />
                </Link>
                <Link href='/tienda/microvegetales' className='flex flex-col lg:gap-3 w-full md:w-[25%] h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] md:rounded-3xl transition-all ease-in-out duration-200 md:hover:border-[#00243E] md:hover:border-[3px] md:px-1 lg:px-2'>
                  <h3 className='rounded-md h-fit text-center text-black text-[16px] lg:text-[24px] font-semibold'>Microvegetales</h3>
                  <Image className='w-full h-full object-contain rounded'
                    src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685314321/Bidhara/products/microvegetales/CatVegetales.png'
                    alt='Foto de platillo con microvegetales'
                    width={1600}
                    height={781}
                  />
                </Link>
              </div>
            </section>
            {/* Fourth section PRODUCTOS MAS VENDIDOS */}
            <section id='masvendidos' className='flex flex-col w-full my-12 px-2 md:px-4 gap-6 justify-center items-center font-text'>
              <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='text-[24px] text-center font-semibold md:text-[28px] lg:text-[30px]'>Productos más vendidos</h2>
                <ul className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5'>
                  {bestSellerProducts && bestSellerProducts.map(product => {
                    return (
                      <Productcard key={product._id} product={product}></Productcard>
                    )
                  })}
                </ul>
              </div>
              <button type='button' className='w-[191px] h-[41px] bg-[#0495A8] border-2 border-[#0495A8] md:hover:border-[#014D64] rounded-full transition ease-in duration-150 lg:w-[333px] lg:h-[50px] lg:hover:bg-[#014D64]'>
                <Link href='/tienda/brotes-microgreens' className='font-semibold text-white text-[14px] lg:text-[26px]'>Visitar toda la tienda</Link>
              </button>
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {

  try {
    await connectMongo()
    const response = await Test3.find()
    return {
      props: {
        products: JSON.parse(JSON.stringify(response))
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}