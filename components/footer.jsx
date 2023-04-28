import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return(
    <footer className='w-full h-[123px] md:h-[250px] lg:h-[300px] bg-[#00243E] flex flex-col items-center justify-between'>
      <div className=' w-full h-full flex items-center justify-between px-2 md:px-6 lg:px-12'>
        <Link href='/' className='w-[62px] h-[38px] md:w-[192px] md:h-[117px] lg:w-[314px] lg:h-[192px]'>
          <Image
          className='w-auto h-auto'
          src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682470728/Bidhara/Logo1_caxifn.svg'
          alt='Logo de bidhara'
          width={62}
          height={38} />
        </Link>
        <div className='flex flex-col justify-center items-center font-text gap-2'>
          <p className='text-[10px] md:text-[17px] lg:text-[20px] text-white'>SECCIONES</p>
          <ul className='text-[8px] md:text-[14px] lg:text-[18px] text-white text-center flex flex-col gap-[5px]'>
            <li>
              <Link href='/'>INICIO</Link>
            </li>
            <li>
              <Link href='/tienda/brotes-microgreens'>TIENDA</Link>
            </li>
            <li>
              <Link href='/nosotros'>NOSOTROS</Link>
            </li>
            <li>
              <Link href='/contacto'>CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center font-text gap-2'>
          <p className='text-[10px] md:text-[17px] lg:text-[20px] text-white'>CATEGORÍAS</p>
          <ul className='text-[8px] md:text-[14px] lg:text-[18px] text-white text-center flex flex-col gap-[5px]'>
            <li>
              <Link href='/tienda/brotes-microgreens'>BROTES - MICROGREENS</Link>
            </li>
            <li>
              <Link href='/'>FLORES COMESTIBLES</Link>
            </li>
            <li>
              <Link href='/'>HOJAS BABY</Link>
            </li>
            <li>
              <Link href='/'>MICROVEGETALES</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-between items-center gap-1 font-text'>
          <p className='text-[10px] md:text-[17px] lg:text-[20px] text-white'>¡REALIZA UN PEDIDO!</p>
          <FontAwesomeIcon icon={faWhatsapp} className='md:text-[32px] lg:text-[40px] text-white' />
          <p className='text-[10px] md:text-[17px] lg:text-[20px] text-white'>¡SÍGUENOS!</p>
          <div className='flex gap-2'>
            <FontAwesomeIcon icon={faInstagram} className='md:text-[32px] lg:text-[40px] text-white' />
            <FontAwesomeIcon icon={faFacebook} className='md:text-[32px] lg:text-[40px] text-white' />
          </div>
        </div>
      </div>
      <p className='text-[8px] md:text-[14px] text-white font-text'>Derechos de autor © 2023 Bidhara - Gastrogarden</p>
    </footer>
  )
}