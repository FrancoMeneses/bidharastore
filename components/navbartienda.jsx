import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbartienda() {

  const router = useRouter()

  return(
    <nav className='w-full h-[130px] bg-[#30CED1] flex flex-col justify-evenly items-center p-1 md:h-[168px]'>
      <div className='flex text-white w-full justify-center items-center gap-2'>
        <p className='text-[20px] font-text'>Categorías</p>
        <FontAwesomeIcon icon={faLeaf} className='text-[20px]'/>
      </div>
      <div className='w-full h-full grid grid-rows-2 grid-cols-2 gap-4 font-text text-[14px] text-white justify-items-center place-content-center place-items-center md:flex md:h-auto md:justify-evenly md:items-center md:text-[18px]'>
        <Link href='/tienda/brotes-microgreens' className={'transition-text ease-in-out duration-200 hover:underline hover:underline-offset-2' + (router.pathname == '/tienda/brotes-microgreens' ? ' underline underline-offset-2' : '')}>BROTES - MICROGREENS</Link>
        <Link href='/tienda/flores-comestibles' className={router.pathname == '/tienda/flores-comestibles' ? 'underline underline-offset-2' : ''}>FLORES COMESTIBLES</Link>
        <Link href='/tienda/hojas-baby' className={router.pathname == '/tienda/hojas-baby' ? 'underline underline-offset-2' : ''}>HOJAS BABY</Link>
        <Link href='/tienda/microvegetales' className={router.pathname == '/tienda/microvegetales' ? 'underline underline-offset-2' : ''}>MICROVEGETALES</Link>
      </div>
    </nav>
  )
}