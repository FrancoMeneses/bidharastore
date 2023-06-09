import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsApp(){
  return(
    <div className="group/whatsapp z-50 fixed right-4 bottom-4 w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 border-2 rounded-[50%] bg-white flex justify-center items-center md:hover:-translate-y-1 md:hover:scale-110 transition ease-in duration-300">
      <div className="bg-white w-40 rounded-md hidden group-hover/whatsapp:md:block absolute bottom-[65px] right-[-10px] border-2">
        <p className="m-0 p-2 text-xs">¡Haz click para obtener información! 😃</p>
      </div>
      <a href="https://wa.me/2212345135?text=¡Hola!%20Me%20gustaría%20más%20información" className="cursor-pointer" target='_blank'>
      <FontAwesomeIcon icon={faWhatsapp} className='w-8 h-8 md:w-10 md:h-10 text-[#25d366]' />
      </a>
    </div>
  )
}