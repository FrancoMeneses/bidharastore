import { FaLeaf } from "react-icons/fa"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbartienda() {

  const router = useRouter()

  return(
    <nav className='w-full h-[100px] bg-[#0495A8] flex flex-col justify-evenly items-center p-1'>
      <div className='flex text-white w-full justify-center items-center gap-2'>
        <h2 className='text-[20px] font-text font-semibold'>Categorías</h2>
        <FaLeaf className='text-[20px] font-semibold' />
      </div>
      <div className='w-full h-full grid grid-rows-2 grid-cols-2 gap-4 font-text text-[14px] text-white justify-items-center place-content-center place-items-center md:flex md:h-auto md:justify-evenly md:items-center md:text-[18px]'>
        <Link href='/tienda/brotes-microgreens' className={'font-semibold transition-text ease-in-out duration-200 hover:underline hover:underline-offset-2' + (router.pathname == '/tienda/brotes-microgreens' ? ' underline underline-offset-2' : '')}>BROTES - MICROGREENS</Link>
        <Link href='/tienda/flores-comestibles' className={'font-semibold transition-text ease-in-out duration-200 hover:underline hover:underline-offset-2' + (router.pathname == '/tienda/flores-comestibles' ? ' underline underline-offset-2' : '')}>FLORES COMESTIBLES</Link>
        <Link href='/tienda/hojas-baby' className={'font-semibold transition-text ease-in-out duration-200 hover:underline hover:underline-offset-2' + (router.pathname == '/tienda/hojas-baby' ? ' underline underline-offset-2' : '')}>HOJAS BABY</Link>
        <Link href='/tienda/microvegetales' className={'font-semibold transition-text ease-in-out duration-200 hover:underline hover:underline-offset-2' + (router.pathname == '/tienda/microvegetales' ? ' underline underline-offset-2' : '')}>MICROVEGETALES</Link>
      </div>
    </nav>
  )
}