import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Topbar () {
  return(
    <div className="w-full h-[50px] lg:h-[70px] bg-[#0495A8] flex justify-center items-center px-2 md:px-4 md:justify-between md:gap-6">
      <h2 className='text-[11px] font-text text-justify font-[100] text-white md:text-left md:text-[15px] lg:text-[18px]'>
        <span className='font-semibold mr-1'>
          Entregas al siguiente día y con envío GRATIS a partir de $100 solo en la ciudad de Puebla*
        </span> 
          Para información sobre envío a otra ciudad o estado dar  
        <Link href='/contacto' className='underline ml-1'>
          click aquí.
        </Link>
      </h2>
      <div className='hidden md:flex md:gap-3'>
        <a href='https://www.instagram.com/bidhara_mexico/' target="_blank" className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <FontAwesomeIcon icon={faInstagram} className='md:text-[24px] lg:text-[28px] text-white' />
        </a>
        <a href='https://www.facebook.com/bidhara1' target="_blank" className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <FontAwesomeIcon icon={faFacebook} className='md:text-[24px] lg:text-[28px] text-white' />
        </a>
      </div>
    </div>
  )
}