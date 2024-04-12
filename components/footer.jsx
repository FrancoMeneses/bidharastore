import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { useRouter } from "next/router"

export default function Footer() {

  const router = useRouter()

  return(
    <footer className='w-full h-[123px] md:h-[230px] bg-[#00243E] flex flex-col items-center justify-between'>
      <div className=' w-full h-full flex items-center justify-between px-2 md:px-6 lg:px-12'>
        <Link href='/' className='w-[62px] md:w-[192px] md:h-[117px] lg:h-[192px] flex justify-center items-center'>
          <div className="md:hidden w-12 h-full sm:flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.27 171.03"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M0,126.41a16.23,16.23,0,0,0,.65-3.47c1.7-8.25,6.26-14.64,12.8-19.73C20.67,97.59,29,94.28,37.77,92.14a80.21,80.21,0,0,1,21.6-2.31,41.77,41.77,0,0,1,14.75,2.69,12.07,12.07,0,0,1,4.94,3.36A4.4,4.4,0,0,1,80,97.43c-1-.15-1.87-.35-2.78-.43-6.11-.51-11.08,1.88-15.22,6.19-3.17,3.3-4.73,7.47-6.08,11.72-1.43,4.55-2.11,9.29-3.51,13.85-2.07,6.71-5,13-10.06,18a38.22,38.22,0,0,1-22.06,10.79c-1.42.19-1.33.43-1.57-1.4a57.25,57.25,0,0,1,1.55-20.36,77.52,77.52,0,0,1,9.87-24.19c.64-1,1.34-2,2.12-3.11a2.38,2.38,0,0,0-1.1.73C27,113,24.33,117.75,22.2,122.85a90,90,0,0,0-5.67,21.47,116.21,116.21,0,0,0-1.31,20c0,1.59.15,3.18.3,4.76s.2,1.7-1.49,1.81a23.41,23.41,0,0,1-2.78.06c-1.27,0-1.38-.17-1.6-1.41A24.34,24.34,0,0,1,9.76,164c.12-2.13.25-4.26.48-6.39a3.41,3.41,0,0,0-1-2.74c-4.84-5.29-7.43-11.63-8.8-18.57-.27-1.33-.16-2.7-.43-4V130.9a11.54,11.54,0,0,0,0-3.32Z"/><path className="cls-2" d="M0,127.58a6,6,0,0,1,0,3.32Z"/><path className="cls-3" d="M11.1,171c0-.05,0-.11,0-.16H14s0,.11,0,.16Z"/><path className="cls-4" d="M29.81,159.77a48.67,48.67,0,0,0,12.8-7.3,41.08,41.08,0,0,0,11.91-16.59,72.22,72.22,0,0,0,3.29-10.27,2.3,2.3,0,0,1,.43-1c0,2.54-.05,4.92,0,7.3a49,49,0,0,0,.74,8.8,15.26,15.26,0,0,0,15.06,12.48A15.85,15.85,0,0,0,84.64,150c2.3-1.79,3.6-4.31,4.75-6.9a44.58,44.58,0,0,0,3.33-13.24,200.77,200.77,0,0,0,.92-27.52,62.65,62.65,0,0,0-2.86-19,18.65,18.65,0,0,0-5.45-8.6C81.67,71.7,77.4,71.12,72.87,72a23.29,23.29,0,0,0-11.21,5.94c-.41.37-.77.8-1.21,1.13a5.12,5.12,0,0,0-2.27,5.35c.14.73-.13,1-.94,1a85.27,85.27,0,0,0-28.61,4.85c-.88.31-1,.12-1-.72q0-26.4,0-52.8a29.24,29.24,0,0,0-.49-5.91c-.74-3.59-3-6.11-6-8a18.88,18.88,0,0,0-4.59-2.1c-1.09-.35-1.09-.35-.4-1.31A42.25,42.25,0,0,1,25.61,10,51.54,51.54,0,0,1,48.86.71c2.73-.4,5.48-.49,8.23-.7C58-.06,58.2.3,58.2,1.16q0,34.92,0,69.85a2.23,2.23,0,0,0,.13,1.2C60.14,70.6,62,69,63.89,67.64,71.53,62.17,80,59.42,89.4,60.23c11.68,1,21,6.38,28,15.83a45.53,45.53,0,0,1,8.28,21.36,61.85,61.85,0,0,1-2.76,29.35c-3.9,10.91-10.29,20-20.23,26.24a47,47,0,0,1-19.19,6.76,73.39,73.39,0,0,1-19.19-.36,113.21,113.21,0,0,0-21-1.21A84.11,84.11,0,0,0,31,159.82c-.31.06-.63.09-.95.14S29.79,160,29.81,159.77Z"/><path className="cls-1" d="M77.28,99.31a9.75,9.75,0,0,1,4.65.83,3.11,3.11,0,0,1,1.57,4.48,24.11,24.11,0,0,1-6.56,8c-1,.79-1.07.74-1.76-.34a19.66,19.66,0,0,0-2.57-3.53,12.07,12.07,0,0,0-5.81-3.38,4.76,4.76,0,0,1-.74-.2c-.53-.21-1.36-.16-1.47-.75s.47-1.17,1-1.59a14.47,14.47,0,0,1,5.77-2.68A21.41,21.41,0,0,1,77.28,99.31Z"/><path className="cls-5" d="M29.81,159.77,30,160a1.25,1.25,0,0,1-1.08.11Z"/><path className="cls-6" d="M27.85,160.35l.77-.13C28.37,160.62,28.1,160.5,27.85,160.35Z"/></g></g></svg>
          </div>
          <Image
          className='w-auto h-auto hidden md:block'
          src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682470728/Bidhara/Logo1_caxifn.svg'
          alt='Logo de bidhara'
          width={62}
          height={38} />
        </Link>
        <div className='flex flex-col justify-center items-center font-text gap-2'>
          <h2 className='hidden text-[10px] md:block md:text-[17px] lg:text-[20px] text-white'>SECCIONES</h2>
          <ul className='text-[10px] md:text-[14px] lg:text-[18px] text-white text-center flex flex-col gap-[5px]'>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/' className={router.pathname == '/' || router.pathname == '/inicio' ? 'underline underline-offset-2' : ''}>INICIO</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/tienda/brotes-microgreens' className={router.pathname === '/tienda' ? 'underline underline-offset-2' : ''}>TIENDA</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/nosotros' className={router.pathname == '/nosotros' ? 'underline underline-offset-2' : ''}>NOSOTROS</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/contacto' className={router.pathname == '/contacto' ? 'underline underline-offset-2' : ''}>CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center font-text gap-2'>
          <h2 className='hidden text-[10px] md:block md:text-[17px] lg:text-[20px] text-white'>CATEGORÍAS</h2>
          <ul className='text-[10px] md:text-[14px] lg:text-[18px] text-white text-center flex flex-col gap-[5px]'>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/tienda/brotes-microgreens' className={router.pathname == '/tienda/brotes-microgreens' ? 'underline underline-offset-2' : ''}>BROTES - MICROGREENS</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/tienda/flores-comestibles' className={router.pathname == '/tienda/flores-comestibles' ? 'underline underline-offset-2' : ''}>FLORES COMESTIBLES</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/tienda/hojas-baby' className={router.pathname == '/tienda/hojas-baby' ? 'underline underline-offset-2' : ''}>HOJAS BABY</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2">
              <Link href='/tienda/microvegetales' className={router.pathname == '/tienda/microvegetales' ? 'underline underline-offset-2' : ''}>MICROVEGETALES</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col self-start items-center mt-4 gap-1 font-text'>
          <h2 className='text-[10px] md:text-[17px] lg:text-[20px] text-white'>¡SÍGUENOS!</h2>
          <div className='flex gap-2'>
          <a href='https://www.instagram.com/bidhara_mexico/' target="_blank" className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <FaInstagram className='md:text-[32px] lg:text-[40px] text-white' />
          </a>
          <a href='https://www.facebook.com/bidhara1' target="_blank" className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <FaFacebook className='md:text-[32px] lg:text-[40px] text-white' />
          </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-3">
        <p className='text-[10px] md:text-[14px] text-white font-text'>Derechos de autor © 2024 Bidhara - Gastrogarden</p>
        <Link href='/aviso-privacidad' className='text-[10px] md:text-[14px] text-white font-text underline'>Aviso de privacidad</Link>
      </div>
    </footer>
  )
}