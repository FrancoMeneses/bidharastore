import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { useRouter } from 'next/router'
import { useContext, useState } from "react"
import { StoreContext } from "@/context/store"

export default function Navbar(){

  const { cart, handleSidebarCart } = useContext(StoreContext)

  const [ open, setOpen ] = useState(true)
  const router = useRouter()

  function setMovilMenu(){
    setOpen(!open)
    let ul = document.getElementById('movilmenu')
    let collection = ul.children
    if(open){
      ul.classList.add('h-[150px]')
      setTimeout(() => {
        for(let i = 0; i < collection.length; i++){
          collection[i].classList.remove('hidden')
        }
      }, "300");
    }
    if(!open){
      ul.classList.remove('h-[150px]')
      for(let i = 0; i < collection.length; i++){
        collection[i].classList.add('hidden')
      }
    }
  }

  return(
    <div className="w-full flex flex-col">
      <div className='w-full h-[100px] bg-[#0495A8] flex justify-between items-center px-2 md:px-[60px]'>
        <button type='button' className='md:hidden' onClick={() => setMovilMenu()}>
          <FontAwesomeIcon icon={faAlignLeft} className='text-[39px] text-white' />
        </button>
        <Link href='/'>
        <Image 
        src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682470728/Bidhara/Logo1_caxifn.svg'
        alt='Logo de bidhara'
        width={122}
        height={75} />
        </Link>
        <ul className='hidden md:flex md:justify-center md:items-center md:text-white md:gap-[40px] font-text'>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/' className={router.pathname == '/' || router.pathname == '/inicio' ? 'underline underline-offset-2' : ''}>INICIO</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/tienda/brotes-microgreens' className={router.pathname == '/tienda' ? 'underline underline-offset-2' : ''}>TIENDA</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/nosotros' className={router.pathname == '/nosotros' ? 'underline underline-offset-2' : ''}>NOSOTROS</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/contacto' className={router.pathname == '/contacto' ? 'underline underline-offset-2' : ''}>CONTACTO</Link>
          </li>
        </ul>
        <button type="button" className='flex w-auto h-auto' onClick={handleSidebarCart}>
          <Image className='h-auto'
          src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682472271/Bidhara/Cart_white_fn8kql.svg'
          alt='Carrito'
          width={38}
          height={55} />
          <div className='rounded-full border-[1.5px] border-[#014D64] bg-white w-[28px] h-[28px] self-end flex justify-center items-center'>
            <p className='text-[#014D64]'>{cart && cart.length}</p>
          </div>
        </button>
      </div>
      <div className='font-text'>
        <ul id='movilmenu' className={'absolute w-full flex flex-col gap-2 justify-center items-center text-white bg-[#0495A8] h-[0px] transition-height ease-linear duration-500 z-50'}>
          <li className='hidden'>
              <Link href='/' className={router.pathname == '/' || router.pathname == '/inicio' ? 'underline underline-offset-2' : ''} >INICIO</Link>
          </li>
          <li className='hidden'>
              <Link href='/tienda/brotes-microgreens' className={router.pathname == '/tienda' ? 'underline underline-offset-2' : ''} >TIENDA</Link>
          </li>
          <li className='hidden'>
              <Link href='/nosotros' className={router.pathname == '/nosotros' ? 'underline underline-offset-2' : ''} >NOSOTROS</Link>
          </li>
          <li className='hidden'>
              <Link href='/contacto' className={router.pathname == '/contacto' ? 'underline underline-offset-2' : ''} >CONTACTO</Link>
          </li>
        </ul>
      </div>
      {/* <div className={open ? 'flex' : 'hidden'}>
        <ul className={'absolute w-full flex flex-col gap-2 py-2 justify-center items-center text-white bg-[#0495A8]'}>
          <li>
              <Link href='/'>INICIO</Link>
          </li>
          <li>
              <Link href='/'>TIENDA</Link>
          </li>
          <li>
              <Link href='/nosotros'>NOSOTROS</Link>
          </li>
          <li>
              <Link href='/contacto'>CONTACTO</Link>
          </li>
        </ul>
      </div> */}
    </div>
  )
}