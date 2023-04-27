import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Topbar () {
  return(
    <div className="w-full h-[60px] bg-[#014D64] flex justify-center items-center px-2 md:px-4 md:justify-between md:gap-6">
      <p className='text-[13px] font-text text-justify font-[100] text-white md:text-left md:text-[17px] lg:text-[20px]'><span className='font-semibold'>Entregas al siguiente día solo en la ciudad de Puebla*</span> Para información sobre envío a otra ciudad o estado dar click aquí.</p>
      <div className='hidden md:flex md:gap-3'>
        <FontAwesomeIcon icon={faWhatsapp} className='md:text-[24px] lg:text-[28px] text-white' />
        <FontAwesomeIcon icon={faInstagram} className='md:text-[24px] lg:text-[28px] text-white' />
        <FontAwesomeIcon icon={faFacebook} className='md:text-[24px] lg:text-[28px] text-white' />
      </div>
    </div>
  )
}