import Layout from "@/components/layout";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShippingFast, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export default function Home() {
  return (
    <Layout title='Inicio - Bidhara'>
      <div className='w-full'>
        {/* Banner 1 */}
        <div className='w-full h-[144px] md:h-[500px]'>
          <Image className='w-full h-full object-cover'
            src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682557387/Bidhara/pages/inicio/banner-2.jpg'
            alt='Flores comestibles'
            width={1600}
            height={1066}
          />
        </div>
        {/* Container sections */}
        <div className='flex flex-col px-2 justify-center items-center'>
          {/* First section INTRO */}
          <div className='flex flex-col gap-4 my-6 px-2 md:px-16'>
            <h1 className='text-[18px] text-center font-semibold md:text-[28px]'>
              Lorem ipsum dolor sit amet
            </h1>
            <p className='text-[14px] text-justify md:text-[20px]'>
              Lorem ipsum dolor sit amet consectetur. Malesuada faucibus nisi sit non lacus quis nunc in risus.
              Convallis enim urna dui volutpat. In urna bibendum vitae est ut. Elementum habitant mi proin suspendisse.
              Congue orci nibh vulputate volutpat proin id commodo amet. Ut consectetur aliquam a vestibulum et quis.
              Aliquam nibh mattis cursus vel iaculis mattis volutpat magna faucibus.
            </p>
          </div>
          {/* Second section PEDIDO */}
          <div className='my-6 px-2 md:px-16 flex flex-col gap-6'>
            <h2 className='text-[18px] text-center font-semibold md:text-[28px]'>Pasos para realizar un pedido</h2>
            <div className='w-full h-auto grid grid-cols-3 grid-rows-2 gap-2 place-content-center place-items-center lg:flex lg:gap-4 lg:justify-between lg:items-center'>
              <div className='flex flex-col justify-between items-center gap-1 md:h-[185px] lg:gap-6 lg:h-[230px]'>
                <Image className='w-[38px] h-[55px] md:w-[76px] md:h-[111px] lg:w-[100px] lg:h-[145px]'
                  src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682559897/Bidhara/Cart_index_uphsdr.svg'
                  alt='Carrito'
                  width={38}
                  height={55} />
                <p className='text-[12px] text-center md:text-[15px] lg:text-[16px]'>
                  Visita la tienda y agrega los productos a tu carrito
                </p>
              </div>
              <FontAwesomeIcon icon={faRightLong} className='text-[39px] text-[#0495A8]' />
              <div className='flex flex-col justify-between items-center gap-1 md:h-[185px] lg:gap-6 lg:h-[230px]'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-[39px] md:text-[90px] lg:text-[130px] text-[#0495A8]' />
                <p className='text-[12px] text-center md:text-[15px] lg:text-[16px]'>
                  Realiza el pedido en la página y te enviará a nuestro WhatsApp con los detalles de tu pedido
                </p>
              </div>
              <FontAwesomeIcon icon={faRightLong} className='hidden lg:block text-[39px] text-[#0495A8]' />
              <div className='flex flex-col justify-between items-center gap-1 lg:gap-6 lg:h-[230px]'>
                <FontAwesomeIcon icon={faStore} className='text-[39px] md:text-[90px] lg:text-[114px] text-[#0495A8]' />
                <p className='text-[12px] text-center md:text-[15px] lg:text-[16px]'>
                  Te responderemos para acordar tu pedido y empezaremos a prepararlo
                </p>
              </div>
              <FontAwesomeIcon icon={faRightLong} className='text-[39px] text-[#0495A8]' />
              <div className='flex flex-col justify-between items-center gap-1 lg:gap-6 lg:h-[230px]'>
                <FontAwesomeIcon icon={faShippingFast} className='text-[39px] md:text-[90px] lg:text-[114px] text-[#0495A8]' />
                <p className='text-[12px] text-center md:text-[15px] lg:text-[16px]'>
                  Enviaremos tus productos en la fecha y hora acordada
                </p>
              </div>
            </div>
          </div>
          {/* third section CATEGORIAS */}
          <div className='flex flex-col w-full my-6 px-2 md:px-4 gap-6 justify-center items-center'>
            <h2 className='text-[18px] text-center font-semibold md:text-[28px]'>Categorías</h2>
            <div className='grid grid-rows-2 grid-cols-2 place-content-center place-items-center content-center gap-0 w-auto md:flex md:w-full'>
              <div className='relative flex flex-col w-[150px] h-[212px] md:h-[350px] md:w-[0px] md:grow md:hover:w-[250px] lg:w-[0px] lg:h-[500px] lg:grow transition-width ease-linear duration-500 lg:hover:w-[400px]'>
                <p className='absolute left-[50%] translate-x-[-50%] mt-1 rounded-md h-fit text-center text-[11px] font-light text-white backdrop-blur-md md:font-semibold md:text-[16px] lg:text-[24px]'>Brotes - Microgreens</p>
                <Image className='w-full h-full object-cover rounded-tl-lg md:rounded-l-lg'
                  src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682562595/Bidhara/pages/inicio/categorias/cat-brotes-micro.jpg'
                  alt='Categoria de brotes o microgreens'
                  width={1600}
                  height={781}
                />
              </div>
              <div className='relative flex flex-col w-[150px] h-[212px] md:h-[350px] md:w-[0px] md:grow md:hover:w-[250px] lg:w-[0px] lg:h-[500px] lg:grow transition-width ease-linear duration-500 lg:hover:w-[400px]'>
                <p className='absolute left-[50%] translate-x-[-50%] mt-1 rounded-md h-fit text-center text-[11px] font-light text-white backdrop-blur-md md:font-semibold md:text-[16px] lg:text-[24px]'>Flores comestibles</p>
                <Image className='w-full h-full object-cover rounded-tr-lg md:rounded-none'
                  src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682562595/Bidhara/pages/inicio/categorias/cat-flores-comestibles.jpg'
                  alt='Categoria de flores comestibles'
                  width={1600}
                  height={781}
                />
              </div>
              <div className='relative flex flex-col w-[150px] h-[212px] md:h-[350px] md:w-[0px] md:grow md:hover:w-[250px] lg:w-[0px] lg:h-[500px] lg:grow transition-width ease-linear duration-500 lg:hover:w-[400px]'>
                <p className='absolute left-[50%] translate-x-[-50%] mt-1 rounded-md h-fit text-center text-[11px] font-light text-white backdrop-blur-md md:font-semibold md:text-[16px] lg:text-[24px]'>Hojas baby</p>
                <Image className='w-full h-full object-cover rounded-bl-lg md:rounded-none'
                  src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682562595/Bidhara/pages/inicio/categorias/cat-hojas-baby.jpg'
                  alt='Categoria de hojas baby'
                  width={1600}
                  height={781}
                />
              </div>
              <div className='relative flex flex-col w-[150px] h-[212px] md:h-[350px] md:w-[0px] md:grow md:hover:w-[250px] lg:w-[0px] lg:h-[500px] lg:grow transition-width ease-linear duration-500 lg:hover:w-[400px]'>
                <p className='absolute left-[50%] translate-x-[-50%] mt-1 rounded-md h-fit text-center text-[11px] font-light text-white backdrop-blur-md md:font-semibold md:text-[16px] lg:text-[24px]'>Microvegetales</p>
                <Image className='w-full h-full object-cover rounded-br-lg md:rounded-r-lg'
                  src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682562595/Bidhara/pages/inicio/categorias/cat-microvegetales.jpg'
                  alt='Categoria de microvegetales'
                  width={1600}
                  height={1066}
                />
              </div>
            </div>
          </div>
          {/* Fourth section PRODUCTOS MAS VENDIDOS */}
          <div className='flex flex-col w-full my-6 px-2 md:px-4 gap-6 justify-center items-center'>
            <h2 className='text-[18px] text-center font-semibold md:text-[28px]'>Productos más vendidos</h2>
            <button type='button' className='w-[191px] h-[41px] bg-[#0495A8] border-[#014D64] border-2 rounded-full transition ease-in duration-150 lg:w-[333px] lg:h-[70px] lg:hover:bg-[#014D64]'>
              <Link href='/tienda' className='font-semibold text-white text-[14px] lg:text-[30px]'>Visitar toda la tienda</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
